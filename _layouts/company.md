---
layout: site
showButton: true
---

<div class="row">
  <div class="col-lg-9">
    <div class="mt-3">
      <div class="align-items-center"></div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          {% if page.slogan %}
          <h1 class="h2">{{ page.title }} - {{ page.slogan }}</h1>
          {% else %}
          <h1 class="h2">{{ page.title }}</h1>
          {% endif %}
          <p>
            {{ page.description }}
          </p>
          {% if layout.showButton and layout.buttonText == nil %}
          <a href="{{ page.targetUrl }}" target="_blank" class="btn btn-success">Website von {{ page.title }}
            besuchen!</a>
          {% elsif layout.showButton %}
          <a href="{{ page.targetUrl }}" class="btn btn-success">{{ layout.buttonText }}</a>
          {% endif %}
        </div>
      </div>
      {{ content }}
    </div>
  </div>
  <div class="col-lg-3 order-first order-md-2">
    <div class="text-center">
      <a target="_blank" href="{{ page.targetUrl }}"><img class="img-fluid" src="{{ page.image }}" /></a>
      <a class="btn btn-outline-success mt-2" target="_blank" href="{{ page.targetUrl }}">Gehe zum {{ page.title }}
        Shop</a>
    </div>
    <hr />
    <h2 class="h4">Zahlungsoptionen</h2>
    {% include simple-list.md content=page.payments %}
    <hr />
    <h2 class="h4">Versandoptionen</h2>
    {% include simple-list.md content=page.shippings %}
    <hr />
    <h2 class="h4">Tags</h2>
    {% include tag-list.md content=page.tags %}
  </div>
</div>