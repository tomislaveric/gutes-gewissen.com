---
layout: base
showButton: true
---

<div class="container">
    <div class="row">
        <div class="col-9">
            <div class="jumbotron">
                {% if page.slogan %}
                    <h1 class="h2">{{ page.title }}
                        -
                        {{ page.slogan }}</h1>
                {% else %}
                    <h1 class="h2">{{ page.title }}</h1>
                {% endif %}
                <p>
                    {{ page.description }}
                </p>
                {% if layout.showButton and layout.buttonText == nil %}
                    <a href="{{ page.targetUrl }}" target="_blank" class="btn btn-success">Website von
                        {{ page.title }}
                        besuchen!</a>
                {% endif %}
            </div>
            <div class="mt-3">
                <div class="align-items-center"></div>
                {{ content }}
            </div>
        </div>
        <div class="col-3">
            <div class="text-center">
                <a target="_blank" href="{{ page.targetUrl }}"><img class="img-fluid" src="{{ page.image }}"/></a>
                <a class="btn btn-outline-success mt-2" target="_blank" href="{{ page.targetUrl }}">Gehe zum
                    {{ page.title }}
                    Shop</a>
            </div>
            {% if page.payments %}
                {% include simple-list.md title="Zahlungsoptionen" content=page.payments %}
            {% endif %}
            {% if page.shippings %}
                {% include simple-list.md title="Versandoptionen" content=page.shippings %}
            {% endif %}
            {% if page.tags %}
                {% include tag-list.md content=page.tags %}
            {% endif %}
        </div>
    </div>
</div>