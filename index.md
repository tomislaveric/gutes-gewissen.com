---
layout: base
title: Willkommen bei gutes-gewissen.com
slogan: Wir stehen für Nachhaltigkeit und Fairness
description: Nachhaltigkeit, Naturschutz sowie faire Bedigungen der Bauern und Qualität sind wichtige Themen bei denen wir Transparenz schaffen wollen. Wir zeigen, dass Konsum nicht immer schädlich
  für unsere Umwelt sein muss! Wir werden hier nur Hersteller und Produkte auflisten, die wir genau unter die Lupe genommen haben und von denen wir auch wirklich überzeugt sind. Solltest du weitere Produkte oder Hersteller kennen, die diesen Ansprüchen genügen, so gebe uns doch Bescheid und wir werden diese hinzufügen!
tags: [Nachhaltigkeit, Naturprodukte, Fair-Trade, Made in Germany]
---
<div class="container py-4">
  <h1 class="h3">{{ page.title }}</h1>
  <h2 class="lead text-muted">{{ page.slogan }}</h2>
  <hr class="my-3">
  <div class="row">
    <div class="col-12 col-lg-9">
      {% for post in site.posts %}
        {% include company-list-element.md content=post %}
      {% endfor %}
      <div class="my-4">{{ page.description }}</div>
    </div>
    <div class="col-12 col-lg-3">
      <div class="sticky-top">
        {% include right-sidebar.md %}
      </div>
    </div>
  </div>
</div>

