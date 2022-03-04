<h2 class="h3">Alle Anbieter zum Thema {{ include.rubric }}</h2>
    {% for post in site.posts %}
     {% if post.rubric contains include.rubric %}
        {% include company-list-element.md content=post %}
    {% endif %}
    {% endfor %}
