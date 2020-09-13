---
decorationTitle: HUGO WEB
title: 静的ウェブサイト開発
date: 2020-07-24T00:00:00+09:00
draft: false
cardimg: hugo-thumb@2x.png
weight: 44
menu:
  main:
    parent: services
pickup: true
---

{{< page-header class="" title-class="" >}}

{{< wide-img bgsrc="hugo-desktop@2x.png" class="pt4" >}}

{{% content-box class="message" %}}

なぜいま「静的ウェブサイト開発」が注目されているのでしょうか。 大きな理由として、Wordpress に代表されるコンテンツ・マネジメント・システム（CMS）を運用する上で、3 つの課題があるからです。

**セキュリティ**：CMS のほとんどは、定期的にバージョンアップされていきます。バージョンアップでの変更点が小さなものであれば、大きな問題にはなりませんが、大幅なアップデートであれば注意が必要です。インストールしたプラグインや拡張機能との整合性が合わなくなり、サイトに不具合が発生することがあります。例えば、突然ページのレイアウトが崩れたり、問い合わせフォームの動作がおかしくなるなどが考えられます。

**パフォーマンス**：「ページの読み込みスピードが遅い」といった問題は、CMS が動的にページを生成するという仕組み上、なかなか避けることはできません。とりあえずウェブサイトを置く、のであれば、ここは問題にはなりません。しかし、サイトを通じての、ブランディングや SEO を目指すのであれば、サイトの流入数や離脱率を少しでも良くするために、少しでも高速なサイトを作るべきでしょう。

**メンテナンス**: CMS を導入した場合「定期メンテナンス」の費用を見込んでください。CMS のバージョンアップに伴う互換性チェックや、不具合対応、バックアップ、サーバー側のアップデート対応が必要となります。「バージョンアップはしない」という乱暴な考え方もありますが、セキュリティーホールが空きっぱなしになり、問題があります。

当社では**静的サイトジェネレーター HUGO**にて、速やかに静的ウェブサイトを構築します。ユーザー様における現状の理解から改善策の立案については、当社プロフェッショナルへご相談ください。

{{< responsive-img src="hugo.png" width="1008" options="jpg" >}}

## 静的・動的CMSとの違い

項目 | 静的 | 動的CMS
-- | -- | --
パフォーマンス|良い|中〜高
セキュリティ | 非常に良い | 中〜低
インフラ | 単純 | より複雑
バックアップ | 容易 | より難しい
データ駆動化 | いいえ | はい
コンテンツ更新 | ファイル単位 | レコード単位
デザイン | 自由 | テーマによる
バージョンアップ | 任意 | 継続的かつ脆弱

## 事例

**サイト**：[当社コーポレートサイト](https://www.andaze.com/)

**課題**：Wordpress にて制作していたが、アクセスが遅い、バージョンアップの保守コストがかかる、セキュリティ強化に限界があること

**ソリューション**：[Azure Static Web Apps](https://azure.microsoft.com/ja-jp/services/app-service/static/)がリリースされたことを契機に、静的コードジェネレーターへ移行。選定プロセスを得て、HUGO を採用し、GitHub にてサイトを管理中。サイト運用担当の時間的、精神的な負担が減り、コンテンツ制作の生産性が高まった。

**参考**：[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)にて、任意の当社コーポレートサイトの URL を入力すると、Google によってパフォーマンスが高いことが確認できます。

{{%/ content-box %}}

{{< section-header title1_1="EXAMPLE" title2="サービス例" >}}

{{% service-details %}}
{{% service-details-col %}}
{{% service-details-row title="期間" %}}

- 随時

  {{%/ service-details-row %}}

  {{% service-details-row title="契約" %}}

- 計画立案および設計：準委任契約
- 製作：請負契約

  {{%/ service-details-row %}}

  {{% service-details-row title="納品物" %}}

**基本セット**

- 現状把握と貴社ソリューションの理解
- ゴール設計、マイルストーン策定
- 要件定義書作成
- 基本設計書作成
- プロトタイプ/POC 作成
- レビューミーティングの実施

  {{%/ service-details-row %}}
  {{%/ service-details-col %}}
  {{% service-details-col table_class="continue" %}}
  {{% service-details-row %}}

**設計**

- コンテンツ配置設計
- ナビゲーション設計
- パフォーマンス設計
- キャッシュ設計

**貴社の IT チームとして**

- AMP スペシャリスト
- HTML/CSS コーダー

**運用**

- システム利用状況の分析
- 改善施策の立案
- サポートデスク
- 管理者向け機能説明

  {{%/ service-details-row %}}
  {{%/ service-details-col %}}
  {{%/ service-details %}}
