<h1 class="h3">Alle Anbieter zum Thema {{ include.rubric }}</h1>
<div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-xs-1 mt-4">
    {% for post in site.posts %}
     {% if post.rubric contains include.rubric %}
        {% include company-list-element.md content=post %}
    {% endif %}
    {% endfor %}
</div>
