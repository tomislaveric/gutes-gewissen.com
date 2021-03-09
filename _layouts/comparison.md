---
layout: base
---

<div class="jumbotron">
    <div class="container">
        <h1 class="h2">{{ page.title }} im Vergleich {{ 'now' | date: "%Y" }}</h1>
        <h2 class="h5 text-muted">{{ page.headline }}</h2>
    </div>
</div>
<div class="container">
<p>{{ page.description }}</p>
    {{content}}
</div>