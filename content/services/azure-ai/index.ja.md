---
decorationTitle: AZURE AI
title: AI機械学習開発
date: 2020-07-24T00:00:00+09:00
draft: false
cardimg: ai-thumb@2x.jpg
weight: 14
menu:
  main:
    parent: services
pickup: true
---

{{< page-header class="" title-class="" >}}

{{< wide-img bgsrc="ai-desktop.jpg" class="pt4" >}}

{{% content-box class="message" %}}

なぜ「機械学習」が注目されているのでしょうか。スマホの普及などに伴い、大量のデータが出現するようになりました。いままでは、複雑なデータを処理するため、多大なコストや時間が必要でしたが、「人間では到底実現できない速さと精度で、分析結果を計算すること」が機械学習によって実現できるようになりました。

**機械学習のメリット**

- 特徴量を学習することで予測値を算出
- 複数のアルゴリズムを適用して、再現性の高いモデルを選定
- クラスタリングによって特徴を分類化して予測精度が向上

**デメリット**

- ある程度の教師データが必要（分類ごとに最低 100 件程度）
- モデルの精度向上には、再学習が必要

{{< responsive-img src="concept-machine-learning.png" width="1008" options="jpg" >}}

当社では**オープンソースの AI 開発フレームワーク ML.NET**にて、速やかに機械学習をモデリングします。貴社の現状の理解から企画の立案については、当社プロフェッショナルへご相談ください。

### 事例

**業種**：証券業

**要望**：株価の独自フェアバリューの算定したい

**ソリューション**：上場企業の財務情報を過去分を含め EDINET より取得して、教師データとすることにしました。基本統計量およびクラスタリングを適用し、特徴量と株価の相関について粗い粒度で解析し、机上のモデルを作成しました。重回帰および数量化による仮モデルを作成して、特徴量とその変換によって、一次的な精度向上へ取り組みました。理論、精度の両面で、現場から一定の評価を得た上で、本番モデリングのためのアルゴリズム選定、最終的にはクラスターごとにモデルを作成しました。フェアーバリュー算定を独自の目線で行うことに成功され、投資判断に活用されているとのことです。

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

- AI モデリング
- 精度、正確性管理

**貴社の IT チームとして**

- AI コンサルタント
- SI コンサルタント
- ML.NET エンジニア
- C#/JavaScript プログラマー

**運用**

- システム利用状況の分析
- 改善施策の立案
- サポートデスク
- 管理者向け機能説明

  {{%/ service-details-row %}}
  {{%/ service-details-col %}}
  {{%/ service-details %}}
