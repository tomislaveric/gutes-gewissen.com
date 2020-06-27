<ul class="list-unstyled">
<li class="h5">{{ include.title }}</li>
  {% for item in include.content %}
<ul class="listing">
  <li>
      {{ item }}
  </li>
  </ul>
  {% endfor %}
</ul>