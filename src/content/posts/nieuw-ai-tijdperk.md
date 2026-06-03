---
author: Robin Gruyters
pubDatetime: 2026-05-29T14:18:00+01:00
modDatetime: 2026-06-10T19:40:13+01:00
title: Nieuw (AI) Tijdperk
slug: nieuw-ai-tijdperk
featured: true
draft: false
tags:
  - algemeen
  - ai
description: Al enige tijd vraag ik me af of ik hierover een blog moet schrijven. We zitten er met z'n allen middenin en de ontwikkelingen veranderen bijna elke minuut. Toch denk ik dat dit de start is van een nieuwe fase in de evolutie van de mensheid en de manier waarop wij naar de wereld kijken.
---

Al enige tijd vraag ik me af of ik hierover een blog moet schrijven. We zitten er met z'n allen middenin en de ontwikkelingen veranderen bijna elke minuut. Toch denk ik dat dit de start is van een nieuwe fase in de evolutie van de mensheid en de manier waarop wij naar de wereld kijken.

In mijn leven heb ik tot nu toe twee grote kantelpunten meegemaakt: de overgang van vaste naar mobiele telefonie en de start van het internettijdperk.

Natuurlijk zou je de overgang van LP naar CD, van walkman naar discman, of de opkomst van de smartphone ook als grote veranderingen kunnen zien. Hoewel die allemaal veel teweeg hebben gebracht, denk ik dat de start van mobiele telefonie en het internet persoonlijk de twee grootste impact hebben gehad.

En nu gaan we weer een nieuw tijdperk in: dat van Kunstmatige Intelligentie, oftewel AI. Voor veel mensen lijkt AI de ultieme oplossing voor talloze vraagstukken. Aan de andere kant is er ook angst voor wat ons te wachten staat. Als AI een groot deel van ons denk- en werkvermogen overneemt, worden wij straks dan gestuurd door computers in plaats van dat wij hen besturen?

Worden we als mensheid dommer omdat AI het denkwerk van ons overneemt? Wat betekent dit voor onze kinderen en kleinkinderen? Persoonlijk geloof ik dat AI ook fantastische dingen zal brengen, bijvoorbeeld bij het onderzoek naar verschillende vormen van kanker en andere ziektes. Zaken waar wij als mens jaren over doen, kan AI in een fractie van de tijd bereiken. Hierdoor komt er kostbare tijd vrij voor ander essentieel onderzoek.

Ook voor mensen met een auditieve of visuele beperking kan AI een enorme uitkomst zijn om beter te functioneren in de maatschappij. Maar los van die mooie kansen, zie ik op dit moment vooral de schaduwzijden van AI, zéker binnen de ICT.

Je ziet nu al veel partijen klagen dat ze de overvloed aan informatie ,(denk aan de stortvloed aan issues en pull requests), simpelweg niet meer kunnen bolwerken. Men vindt het lastig om de tijd en energie op te brengen om te controleren of de aangeleverde informatie wel correct is, voordat deze in een applicatie wordt geïmplementeerd.

Daarnaast zie je de opkomst van het zogenaamde 'Vibe Coding'. Mensen laten iets door AI bouwen of ontwerpen door simpelweg een prompt in te voeren, zonder dat ze zelf enige kennis hebben van de programmeertaal of softwarearchitectuur. Ze geven een opdracht, testen vluchtig of het werkt en knallen het online, met alle [(beveiligings)gevolgen van dien](https://vibeappscanner.com/vibe-coding-data-breaches).

Deze werkwijze is een korte-termijnoplossing. (Junior) engineers leren hier niets van en de kosten voor het token-verbruik lopen razendsnel op. Het geeft een snelle kick en een gevoel van productiviteit, maar uiteindelijk ebt die tevredenheid snel weer weg, net als bij sociale media. Het is een vorm van _short-term satisfaction_.

En wat gaat deze manier van werken betekenen voor mij als consultant? Worden wij straks vervangen door AI? Je leest momenteel veel berichten over Amerikaanse bedrijven die werknemers vervangen door AI en junior engineers om zo de kosten te drukken en sneller resultaat te boeken. Denk aan voorbeelden zoals [Meta](https://www.nytimes.com/2026/05/19/technology/meta-layoffs-ai.html) en [Cloudflare](https://techcrunch.com/2026/05/08/cloudflare-says-ai-made-1100-jobs-obsolete-even-as-revenue-hit-a-record-high/), of nog erger bedrijven die hun personeel vooraf niet eens informeren over hun ontslag, zoals bij [Webflow](https://hoodline.com/2026/05/locked-out-before-logoff-webflow-s-sudden-sf-layoffs-jolt-tech-workers/).

Persoonlijk denk ik dat we zo'n vaart niet zal lopen. Ik vermoed (of hoop) dat men er snel achter komt dat deze 'vibe coding'-methode bakken met geld kost aan tokens en dat écht vakmanschap vele malen efficiënter is.

Er zit namelijk een reusachtig verschil tussen een professional met een solide programmeerachtergrond en mijn buurvrouw die een middagje zit te 'vibe coden'. De professional komt sneller en gerichter tot de kern omdat hij de prompt directer kan formuleren en exact weet waar de addertjes onder het gras zitten. Het resultaat? Een superieur product dat ook op de lange termijn onderhoudbaar blijft.

Mitchell Hashimoto (voormalig oprichter en CEO/CTO van Hashicorp) legde dit onlangs perfect uit met een treffend voorbeeld:

> I've got an agent in a loop optimizing a renderer with the goal to minimize frame times (and tests to measure). It got times down from 88ms to 2ms and allocations down from ~150K to 500. Sounds good, right? Wrong. This is exactly why agent psychosis is a big fucking problem.
>
> As an experiment, I rewrote the Ghostty core render state in Go, with access to identically laid out data structures as Ghostty and the exact same validation tests. I made a purposely naive renderer (simple, correct, but slow). 88ms per frame with 150,000 allocations (horrendous, lol)!
>
> I then kickstarted a Ralph loop to bring the frame times down. I told it it can't modify input data structures or the public API or tests (they're correct), but it can do anything else it wants. It got to work.
>
> It has worked for about 4 hours. I've spent around $350 on this experiment so far. The results?
>
> 88ms => 1.5ms
> 150K allocs => ~500 allocs
>
> Incredible right? Nope.
>
> My hand-written renderer I ported has frame times (same benchmark) of ~20us (0.020ms) and 0 allocations in the update path.
>
> This is the problem with psychosis and lacking systems understanding. If you don't understand the system, you're going to accept that this is an incredible result. If you understand the system, you'll see better solutions immediately and can do roughly 75x better on throughput.
>
> The people who blindly trust agent output are in the former camp. They're sheeple, overdrinking from a fountain of mediocrity.
>
> Standard disclaimer: I use AI all the time. I like AI. The point I'm making is to not blindly accept results. Think. Analyze. Learn.
>
> [Mitchell Hashimoto on X](https://x.com/mitchellh/status/2060088112257372610)

In het kort, als je de kennis niet heb en het systeem niet begrijpt, accepteer je dat dit een ongelooflijk resultaat is. Als je de kennis wel heb en het systeem begrijpt, zie je direct betere oplossingen en kun je de doorvoer ongeveer 75 keer verbeteren.

Als de kosten van een willekeurige regel code drastisch dalen, stijgt de waarde van de juiste regel code juist exponentieel. Ik vind het schrijven van code zelf het allerleukste onderdeel van softwareontwikkeling; het lijkt me dan ook vreselijk als juist dat creatieve proces volledig geautomatiseerd wordt.

Een mooie quote uit "The Eternal Sloptember" bericht van George Hotz:

> I’m calling it now, the adoption of AI agents into software development will be one of the most costly mistakes in the field’s history. Agents cannot program, and it’s taking longer and longer to realize that they can’t. They are a highly sophisticated statistical model designed to mimic the distribution of programming. The output is broken, but in a way that’s getting harder and harder to detect. Which is exactly what you’d expect from an increasingly accurate statistical model.
>
> [The Eternal Sloptember](https://geohot.github.io/blog/jekyll/update/2026/05/24/the-eternal-sloptember.html) - George Hotz

Tegelijkertijd kan ik me goed voorstellen dat iemand die nu net van de data- of informaticaopleiding komt, zich wel twee keer achter de oren krabt of die studie en de investering wel waard is geweest. Ik zou momenteel niet graag in de schoenen staan van een afgestudeerde.

Hoe dan ook leven we in een fascinerende, spannende tijd. De toekomst zal uitwijzen waar we over 5 tot 10 jaar staan.

## UPDATE

Blijkbaar beginnen steeds meer bedrijven achter te komen dat veel tokens ook gepaard gaat met hoge kosten.

Zelfs Sam Altman van OpenAI geeft dit aan:

> Sam Altman said AI budgeting has recently become a "huge issue" for some companies, something that "never came up" earlier this year.
>
> [Artikel](https://www.businessinsider.com/sam-altman-openai-top-token-spender-ai-costs-issue-2026-6) op [Business Insider](https://www.businessinsider.com)

Zoals de Yubetuber The Primeagen ook al aangeeft: "Helaas heb ik gelijk".

<div class="vid"><iframe width="560" height="315" src="https://www.youtube.com/embed/m-bT5v5Tm7w?si=9X4aWAFfCsjByBBC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
