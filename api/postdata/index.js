const { parse } = require('azure-func-multipart-parser');
const url = require('url');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env['SendGridAPIKey']);

const axiosBase = require('axios');
const axios = axiosBase.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

module.exports = async function (context) {
    try {
        const { fields } = parse(context.req);
        context.log('Form fields:', fields);

        // reCAPTCHA
        const valid = await validateReCAPTCHA(fields.reCAPTCHA_body_key)

        if (valid === false) {
            throw new Error('validateReCAPTCHA returns false');
        }
        // メールの本文作成
        const txtBody = getMailBody(fields);

        // 送信メール作成
        const msg = {
            to: process.env['ContactUsMailAddress'],
            from: { email: process.env['FromMailAddress'] },
            subject: `${fields.姓} ${fields.名}様からお問い合わせがありました`,
            text: txtBody
        };

        await sgMail.send(msg);

        let referrer = context.req.headers.referer;
        let lang = fields.lang;
        const redirectURL = new URL(lang + '/contact/thank-you', referrer);
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: { result: 'ok' },
            headers: {
                'Content-Type': 'application/json',
                'AMP-Redirect-To': redirectURL.toString(),
                'Access-Control-Expose-Headers': 'AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To'
            }
        }
    }
    catch (err) {
        context.log('error', err)
        if (err.response) {
            console.error(err.response.body)
        }
        context.res = {
            status: 500,
            body: { result: 'error' },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    async function validateReCAPTCHA(key) {
        let params = new URLSearchParams();
        params.append('secret', process.env['reCAPTCHASecret']);
        params.append('response', key);

        return axios.post('https://www.google.com/recaptcha/api/siteverify', params)
            .then(function (response) {
                console.log(response);
                if (response.data.success === true && response.data.score > 0.5) {
                    console.log(response.data.score);
                    return true;
                }
                else {
                    return false;
                }
            })
            .catch(function (error) {
                throw error;
            });
    }

    validateReCAPTCHA().catch((err) => {
        console.log(err);
    })

    function getMailBody(fields) {
        // この文字列はインデント禁止
        const txtBody = 
`お問い合わせ内容
${fields.お問い合わせ}

会社名：${fields.会社名}
名前：${fields.姓}　${fields.名}
メールアドレス：${fields.メールアドレス}
電話番号：${fields.電話番号}
部門：${fields.部門}
役職：${fields.役職}`;

        return txtBody;
    }
};