    {% for post in site.posts %}
     {% if post.rubric contains include.rubric %}
        {% include company-list-element.md content=post %}
    {% endif %}
    {% endfor %}
