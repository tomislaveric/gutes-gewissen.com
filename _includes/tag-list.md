<h3 class="h5">{{ include.title }}</h2>
{% for tag in include.content %}
<div class="badge badge-success mr-1">
  {{ tag }}
</div>

{% endfor %}