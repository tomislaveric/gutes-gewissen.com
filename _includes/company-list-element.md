<div id="front-jumbo" class="jumbotron">
  <div class="mb-2"><a href="/{{post.categories[0]}}" rel="nofollow">{{post.rubric}}</a></div>
  <a href="{{ post.url }}" class="black-link">
  <img src="{{ post.image }}" class="mb-2" style="width: 8rem;" alt="{{ post.title }} logo">
  </a>
  <h1 class="lead">{{ post.title }} - {{ post.slogan }}</h1>
  <p>{{ post.shortDescription }} {{ post.description }}</p>
  <a class="btn btn-success" href="{{ post.url }}" role="button">Über {{ post.title }} weiterlesen</a>
</div>
