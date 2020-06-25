<ul class="list-unstyled">
<li class="h5">{{ include.title }}</li>
  {% for item in include.content %}
  <ul>
  <li>
    <div class="listing">
      {{ item }}
    </div>
  </li>
  </ul>
  {% endfor %}
</ul>