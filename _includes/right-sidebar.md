<h4>Rubriken</h4>
<ul class="list-group">
 {% for rubric in site.rubrics %}
 <a href="{{ rubric.url }}" class="black-link">
 <li class="list-group-item d-flex justify-content-between align-items-center">
    {{ rubric.title }}
    {% for cat in site.categories %}
    {% if cat[0] == rubric.slug %}
    <span class="badge badge-success badge-pill">{{ cat[1].size }}</span>
    {% endif %}
    {% endfor %}
  </li>
  </a>
{% endfor %}
</ul>