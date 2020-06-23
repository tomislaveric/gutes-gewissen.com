<div class="drop-shadow lifted p-2">
  <a class="title-link" href="{{ post.url }}">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-2">
          <img class="img-fluid mt-3" src="{{ post.image }}" alt="{{ post.title }}" />
        </div>
        <div class="col-md-10">
          <h5 class="h5">{{ include.content.title }}</h5>
          <div>{{ post.description | strip_html | truncatewords: 40 }}</div>
          {% include tag-list.md content=post.tags %}
        </div>
      </div>
    </div>
  </a>
</div>
<hr />
