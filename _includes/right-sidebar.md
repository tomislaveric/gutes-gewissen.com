<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
<h4>Rubriken</h4>
<span class="badge badge-secondary badge-pill">{{ site.posts.size }}</span>
</li>
</ul>
<ul class="list-group">
 {% for rubric in site.rubrics %}
 {% if include.rubric == rubric.slug %}
 <li class="list-group-item d-flex justify-content-between align-items-center active">
 {% else %}
 <li class="list-group-item d-flex justify-content-between align-items-center">
 {% endif %}
 <a href="{{ rubric.url }}" class="black-link">
    <small>{{ rubric.title }}</small>
  </a>
    {% for cat in site.categories %}
    {% if cat[0] == rubric.slug %}
    <span class="badge badge-success badge-pill">{{ cat[1].size }}</span>
    {% endif %}
    {% endfor %}
  </li>
{% endfor %}
</ul>