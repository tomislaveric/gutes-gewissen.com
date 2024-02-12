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
{% include breadcrumbs.md %}
</div>
<div class="row">
        <div class="col-lg-9
         col-sm-12 mt-2">
            <div>
                {% if page.slogan %}
                <h1 class="h2">{{ page.title }}
                <h2 class="text-muted h5">{{ page.slogan }}</h2>
                </h1>
                {% else %}
                <h1 class="h2">{{ page.title }}</h1>
                {% endif %}
                <p>{{ page.shortDescription }} {{ page.description }}</p>
                <span id="productCta" class="affili" data-affili="{{ page.targetUrl }}" rel="{% if page.relType %}{{page.relType}}{% else %}sponsored{% endif %}">
                {% if page.highlight %}
                <div class="alert alert-success text-center" role="alert">
                    {{ page.highlight }}
                </div>
                {% endif %}
                {% if page.contentButtonText %}
                    <div class="btn btn-outline-success mb-4 w-100">
                        {{ page.contentButtonText }}
                    </div>
                {% else %}
                    <div class="btn btn-outline-success mb-4 w-100">
                        Website von {{ page.title }} besuchen!
                    </div>
                {% endif %}
                </span>
            </div>
            <div class="align-items-center">
                {{ content }}
            </div>
        </div>
        <div class="col-lg-3 col-sm-12">
            <span class="affili" data-affili="{{ page.targetUrl }}" rel="{% if page.relType %}{{page.relType}}{% else %}sponsored{% endif %}">
                <div class="text-center mb-3">
                    <div>
                        <img class="img-fluid mt-4" src="{{ page.image }}" alt="{{ page.title }} Logo" />
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
            {% assign category = page.categories[0] %}
            {% include alternatives.md category=category %}
            {% if page.media %}
            {% include media.md media=page.media %}
            {% endif %}
        </div>
    </div>
</div>
{% include ctaBar.md %}