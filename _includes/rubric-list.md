<h2>Alle Anbieter zum Thema {{ include.rubric }}</h2>
<hr />
{% for post in site.posts %} {% if post.rubric contains include.rubric %} {% include
company-list-element.md content=post %} {% endif %} {% endfor %}
