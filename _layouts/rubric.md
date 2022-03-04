---
layout: base
---
<div class="container py-4">
        <h1 class="h2">{{ page.title }} im Vergleich {{ 'now' | date: "%Y" }}</h1>
        <h2 class="lead text-muted">{{ page.headline }}</h2>
<hr class="my-3">
</div>
<div class="container">
<div class="row">
<div class="col-lg-9">
{% include rubric-list.md rubric=page.title %}    
    <h2 class="h4">Nachhaltige Anbieter in der Rubrik {{ page.title }}</h2>
    <p>{{ page.shortDescription }}</p>
    <p>{{ page.description }}</p>
</div>
<div class="col-lg-3">
<div class="sticky-top">
{% include right-sidebar.md rubric=page.slug%}
</div>
</div>
</div>
    
</div>