---
layout: base
---

<div class="jumbotron">
    <div class="container">
        <h1 class="h2">Nachhaltige {{ page.title }} im Vergleich {{ 'now' | date: "%Y" }}</h1>
        <div>{{ page.description }}</div>
    </div>
</div>
<div class="container">
    {% include rubric-list.md rubric=page.title %}
</div>