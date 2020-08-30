---
decorationTitle: COSMOS DATABASE
title: NOSQLデータベース開発
date: 2020-07-24T00:00:00+09:00
draft: false
cardimg: cosmos-thumb@2x.jpg
weight: 50
menu:
  main:
    parent: services
pickup: true
---

{{< page-header class="" title-class="" >}}

{{< wide-img bgsrc="cosmos-desktop@2x.jpg" class="pt4" >}}

{{% content-box class="message" %}}

なぜ「データベース最適化」が重要なのでしょうか。大量のデータを保持しながら、リアルタイムに分析を行うなど、指数関数的に増加するデータを扱うために、従来の RDB を補完する形で NoSQL を利用する企業が増えています。

これまでは RDBMS と呼ばれるデータベースを使ってきました。内部のデータ構造が正規化されており、一つの画面を表示するのに、いくつものマスターテーブルを参照する必要がありました。

一方 NOSQL と呼ばれるデータベースを使うと、必要な情報を、一発で取り出せるよう設計ができるようになります。サーバーの台数追加で、データ量やトラフィックの増大に柔軟に対応できるようになります。

**NOSQL のメリット**

- アプリケーションに最適化されたデータ格納形式をとれる
- データ型を定義せずデータを格納できる
- サーバーの台数追加で性能の向上が容易にできる

**デメリット**

- データの整合性を設計で考慮する必要がある

当社では**Azure Cosmos データベース**を活用して、速やかにデータベース最適化を進めます。貴社の現状の理解から企画の立案については、当社プロフェッショナルへご相談ください。

{{< responsive-img src="cosmos.png" width="1008" options="jpg" >}}

### 事例

**業種**：自動車製造業

**概要**：IoT 端末からの生データを、大容量データベース Azure Table Storage へ格納。システムからの照会のために、Azure Function の定期起動によって、データを集計と加工して、表示形式に最適化された Json データを作成。柔軟なデータを格納できる Cosmos データベースへ保存することで、照会画面は、ほぼ一瞬で、必要な情報を参照できるように改善された。

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
