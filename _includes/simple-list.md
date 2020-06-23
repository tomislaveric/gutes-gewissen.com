<h2 class="h5">{{ include.title }}</h2>
<ul>
  {% for item in include.content %}
  <li>
    <div class="listing">
      {{ item }}
    </div>
  </li>
  {% endfor %}
</ul>