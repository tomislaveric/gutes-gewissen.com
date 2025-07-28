---
layout: base
---
<div class="container py-4">
    <h1 class="h3">{{ page.title }} im Vergleich {{ 'now' | date: "%Y" }}</h1>
    <h2 class="lead text-muted">{{ page.headline }}</h2>
    <hr class="my-3">
    <p>{{ page.description }}</p>
    <aside>
    <div class="row">
            <div class="col-12 col-lg-9">
                    <section>
                    <h2 class="h4">Nachhaltige Anbieter in der Rubrik {{ page.title }}</h2>
                    {% include rubric-list.md rubric=page.title %}
                </section>
                </div>
            <div class="col-lg-3">
                    <section>
                    <div class="sticky-top">
                        {% include right-sidebar.md rubric=page.slug%}
                    </div>
                </section>
                </div>
    </div>
    </aside>
</div>