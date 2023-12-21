---
author: Robin Gruyters
pubDatetime: 2023-08-28T20:39:51+1
title: Terraform BS(L)
postSlug: Terraform BS Licentie
featured: true
draft: false
tags:
  - Terraform
  - Hashicorp
ogImage: ""
description: Hashicorp is overgestapt van een Open Source licentie naar een semi business licentie voor hun producten en daar is de Open Source community niet bepaald mee eens.
---

Hashicorp heeft op 10 augustus 2023 aangekondigd dat zij de licentie model voor Hashicorp Open Source producten zullen aanpassen naar een _Business Source License_ (BSL). Er is sindsdien heel veel commotie ontstaan vanwege deze wijziging met name voor Terraform, tot het punt dat er nu een stichting is opgezet onder de naam [OpenTF](https://opentf.org) met een manifest om Terraform weer Open Source te krijgen.
Gezien ik deze ook ondertekend heb leek mij wel gepast om hier een post aan te wagen.

## Waarom

Waarom?! Tja, das een goeie vraag. Ik ben altijd heel tevreden (geweest?) met de tools van Hashicorp, maar deze wijziging komt wel als een bom binnen.

Ik had wel verwacht dat zij wat zouden gaan veranderen, maar dit zag ik niet aankomen.

## Ja maar waarom?!?

In het kort komt het op neer dat er bedrijven zijn die Terraform gebruiken in hun product (of dienst) en deze vervolgens weer verkopen als product of dienst. Wat op zich geen probleem is, maar daar wilt Hashicorp juist een stokje voor steken d.m.v. een ander licentie model.
Hiermee worden bedrijven verplicht die _Open Source Software_ (OSS) versies gebruiken van Hashicorp in hun product, licentie kosten gaan betalen.

## Oké oké, prima

Nou nee. Al ben ik wel eens dat bedrijven wel iets mogen betalen aan Hashicorp of hun code delen aan de Open Source community, maar de nieuwe licentie beperkt juist de mogelijkheid voor anderen om Terraform te gebruiken. De BSL geeft juist aan dat dit _geen_ Open Source licentie is. Daarbij is nog steeds vaag wat wel mogelijk is en wat niet.

Als voorbeeld, je creëer een CI/CD pipeline die je als product weer verkoopt/gebruikt voor andere bedrijven. Mag dit dan nog wel, of is dit in strijd met [Terraform Cloud](https://app.terraform.io) of [Waypoint](https://www.waypointproject.io/)?

Het zelfde voor als je functionaliteiten om Terraform heen heb gebouwd. Mag dit of is dit in strijd met de licentie?

Nu dat zij naar een business licentie gegaan zijn, wat betekend dat voor de toekomst? Wat als jij nu een product op de markt brengt en over een jaar bepaald Hashicorp dat zij de licentie willen wijzigen, waardoor Terraform helemaal niet meer in eigen product/dienst gebruikt mag worden? Wat gaat dit voor jouw business betekenen?

## En nu?

Daarvoor is er nu een [OpenTF manifesto](https://opentf.org) gestart met als doel dat a) Terraform Open Source blijft, b) als vraag dat Hashicorp Terraform licentie weer terug wordt gezet naar _Mozilla Product License_ (MPL) en c) als alternatief, een _fork_ van Terraform te maken en deze op te nemen in de OpenTF stichting.

Ik ben van mening als eerst gekozen wordt voor een Open Source licentie (los van welke dan ook), deze niet later moet gaan wijzigen. Dit kan gevolgen hebben voor het product maar ook voor de Open Source community.

Neem niet weg dat ik vindt dat Hashicorp zeker geld mag verdienen op hun producten, maar dan zou ik persoonlijk voor kiezen om bepaalde functies in een Enterprise model te doen i.p.v. het wijzigen van een licentie.

De kogel is nu door de kerk en er wordt nu een _fork_ gemaakt van Terraform:

> De OpenTF stichting heeft nu [besloten](https://opentf.org/announcement) om toch voor het alternatief te gaan en een _fork_ te maken van Terraform.
