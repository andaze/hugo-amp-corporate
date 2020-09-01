---
title: AZURE COSMOS DATABASE
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

Why is "database optimization" important? An increasing number of companies are using NoSQL to complement traditional RDBs to handle exponentially growing data, such as real-time analytics while holding large amounts of data.

So far we have used a database called RDBMS. The internal data structure was normalized, and it was necessary to refer to several master tables to display one screen.

A database called NOSQL, on the other hand, allows you to design the information you need in one shot. By adding the number of servers, you will be able to flexibly deal with the increase in data volume and traffic.

**Pros of NOSQL**

- Can take the data storage format optimized for the application
- Can store data without defining data type
- Performance can be easily improved by adding more servers

**Cons**

- Data integrity needs to be considered in design

{{< responsive-img src="cosmos.png" width="1008" options="jpg" >}}

### Case

**Industry**: Automobile manufacturing

**Overview**: Raw data from IoT devices is stored in a large-capacity database, Azure Table Storage. For inquiries from the system, data is aggregated and processed by the regular startup of Azure Function to create Json data optimized for the display format. By saving to the Cosmos database that can store flexible data, the inquiry screen has been improved so that the necessary information can be referenced almost in an instant.

{{%/ content-box %}}

{{< section-header title1_1="SERVICE EXAMPLE" >}}

{{% service-details %}}
{{% service-details-col %}}

  {{% service-details-row title="Contract" %}}

- Planning and design: Semi-delegation contract
- Production: Contract contract

  {{%/ service-details-row %}}

  {{% service-details-row title="納品物" %}}

**Basic set**

- Understanding the current situation and understanding your solution
- Goal design, milestone formulation
- Requirements definition document
- Basic design document creation
- Prototype/POC creation
- Conducting a review meeting

  {{%/ service-details-row %}}
  {{%/ service-details-col %}}
  {{% service-details-col table_class="continue" %}}
  {{% service-details-row %}}

**Design**

- Content layout design
- Navigation design
- Performance design
- Cache design

**As your IT team**

- AMP Specialist
- HTML/CSS coder

**Operation**

- System usage analysis
- Planning of improvement measures
- Support Desk
- Functional description for administrators

  {{%/ service-details-row %}}
  {{%/ service-details-col %}}
  {{%/ service-details %}}
