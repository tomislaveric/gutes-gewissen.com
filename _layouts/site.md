---
layout: base
showButton: true
---

<div class="container">
    <div class="row">
        <div class="col-lg-9 col-sm-12">
            <div class="jumbotron">
                {% if page.slogan %}
                    <h1 class="h2">{{ page.title }} – {{ page.slogan }}</h1>
                {% else %}
                    <h1 class="h2">{{ page.title }}</h1>
                {% endif %}
                <p> {{ page.description }} </p>
                 <span class="affili" data-affili="{{ page.targetUrl }}" rel="nofollow">
                    <div class="btn btn-success mt-3">
                        Website von {{ page.title }} besuchen!
                    </div>
             </span>
            </div>
            <div class="mt-3">
                <div class="align-items-center"></div>
                {{ content }}
            </div>
        </div>
        <div class="col-lg-3 col-sm-12">
             <span class="affili" data-affili="{{ page.targetUrl }}" rel="nofollow">
                <div class="text-center mb-3">
                    <img class="img-fluid" src="{{ page.image }}"/>
                    <div class="btn btn-outline-success mt-3">
                        Gehe zum {{ page.title }} Shop
                    </div>
                </div>   
             </span>
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
                {% include tag-list.md title="Tags" content=page.tags %}
            {% endif %}
        </div>
    </div>
</div>