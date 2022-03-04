---
layout: base
---
<div class="container py-4">
        <h1 class="h2">{{ page.title }} im Vergleich {{ 'now' | date: "%Y" }}</h1>
        <h2 class="lead text-muted">{{ page.headline }}</h2>
<hr class="my-1">
</div>
<div class="container">
    {% include rubric-list.md rubric=page.title %}
    <h2 class="h3 pb-4">Nachhaltige Anbieter in der Rubrik {{ page.title }}</h2>
    <p>{{ page.shortDescription }}</p>
    <p>{{ page.description }}</p>
</div>