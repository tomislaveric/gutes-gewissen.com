---
layout: base
---
<script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "{{ page.title }}",
        "image": "{{ page.image }}",
        "description": "{{ page.description }}",
        "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "{{ page.author }}"
        }
      }
    }
</script>
<div class="container">
    <div class="row">
        <div class="col-lg-9
         col-sm-12 mt-4">
            <div>
                {% if page.slogan %}
                <h1 class="h2">{{ page.title }}</h1>
                <h2 class="text-muted h5">{{ page.slogan }}</h2>
                {% else %}
                <h1 class="h2">{{ page.title }}</h1>
                {% endif %}
                <p>{{ page.shortDescription }} {{ page.description }}</p>
                <span class="affili" data-affili="{{ page.targetUrl }}" rel="nofollow">
                    <div class="btn btn-outline-success mb-4 w-100">
                        Website von {{ page.title }} besuchen!
                    </div>
                </span>
            </div>
            <div class="align-items-center">
                {{ content }}
            </div>
        </div>

        <div class="col-lg-3 col-sm-12">
            <span class="affili" data-affili="{{ page.targetUrl }}" rel="nofollow">
                <div class="text-center mb-3">
                    <div>
                        <img class="img-fluid mt-4" src="{{ page.image }}" />
                    </div>
                    {% if page.sidebarButtonText %}
                    <div class="btn btn-success mt-4 mb-3">
                        {{ page.sidebarButtonText }}
                    </div>
                    {% else %}
                    <div class="btn btn-success mt-4 mb-3">
                        Gehe zum {{ page.title }} Shop
                    </div>
                    {% endif %}
                </div>
            </span>
            {% for element in page.affiliateElements %}
            {% assign title = element[0] %}
            {% assign url = element[1] %}
            {% assign image = element[2] %}
            {% include affiliate-element.md title=title url=url image=image %}
            {% endfor %}
            {% if page.payments %}
            {% include simple-list.md title="Zahlungsoptionen" content=page.payments %}
            {% endif %}
            {% if page.shippings %}
            {% include simple-list.md title="Versandoptionen" content=page.shippings %}
            {% endif %}
            {% if page.contact %}
            {% include simple-list.md title="Kontakt" content=page.contact %}
            {% endif %}
            {% if page.tags %}
            {% include tag-list.md title="Themen" content=page.tags %}
            {% endif %}
        </div>
    </div>
</div>
{% assign alternatives = site.posts | where: "categories", page.categories[0]%}
{% if alternatives.size > 1 %}
<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h2 class="h2">{{page.title}} Alternativen</h2>
        <div class="row">
            {% for post in alternatives %}
            {% if post.title != page.title%}
            <div class="col-lg-2 col-md-3 col-sm-6 col-12">
                <a href="{{post.url}}" ref="nofollow">
                    <div class="card h-100">
                        <div class="card-body align-items-center d-flex justify-content-center">
                            <img src="{{post.image}}" class="alternative-list-img" alt="{{ post.image }} logo">
                        </div>
                    </div>
                </a>
            </div>
            {% endif%}
            {% endfor %}
        </div>
    </div>
</div>
{% endif %}