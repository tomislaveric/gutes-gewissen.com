---
layout: base
title: gutes-gewissen.com steht für Nachhaltigkeit und Fairness
description: Nachhaltigkeit, Naturschutz sowie faire Bedigungen der Bauern und Qualität sind wichtige Themen bei denen wir Transparenz schaffen wollen. Wir zeigen, dass Konsum nicht immer schädlich
  für unsere Umwelt sein muss! Wir werden hier nur Hersteller und Produkte auflisten, die wir genau unter die Lupe genommen haben und von denen wir auch wirklich überzeugt sind. Solltest du weitere Produkte oder Hersteller kennen, die diesen Ansprüchen genügen, so gebe uns doch Bescheid und wir werden diese hinzufügen!
tags: [Nachhaltigkeit, Naturprodukte, Fair-Trade, Made in Germany]
---

<div class="container">
    <div class="py-4">
      <h1 class="h2">{{ page.title }}</h1>
      <div class="mb-4">{{ page.description }}</div>
      <a class="btn btn-success" href="/ueber-uns" role="button">Mehr erfahren!</a>
    </div>
  <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-xs-1">
    {% for post in site.posts %}
      {% include company-list-element.md content=post %}
    {% endfor %}
  </div>
</div>

