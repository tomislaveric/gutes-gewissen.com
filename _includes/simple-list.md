<h2 class="h4">{{ include.title }}</h2>
<ul>
  {% for item in include.content %}
  <li>
    <div class="listing">
      {{ item }}
    </div>
  </li>
  {% endfor %}
</ul>