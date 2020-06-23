<ul>
  {% for item in include.content %}
  <li>
    <div class="listing">
      {{ item }}
    </div>
  </li>
  {% endfor %}
</ul>
