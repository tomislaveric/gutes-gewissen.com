<div id="ctaBar" class="fixed-bottom border-top">
    <div class="container bg-white">
        <span 
        class="affili" 
        data-affili="{{ page.targetUrl }}" 
        rel="{% if page.relType %}{{page.relType}}{% else %}sponsored{% endif %}">
            <div class="col d-lg-none py-2">
                <div class="text-center">
                    <div class="btn btn-success">
                        {% if page.ctaButtonText %}
                        {{page.ctaButtonText}}
                        {% else %}
                        {{ page.title }} besuchen!
                        {% endif %}
                    </div>
                </div>
            </div>
            <div class="d-none d-lg-block">
                <div class="row py-2 align-items-center">
                    <div class="col-auto">
                        <img src="{{page.image}}" alt="{{ page.title }} Call to action"
                            class="img-cta-bar d-none d-lg-block" />
                    </div>
                    <div class="col-auto">
                        <h3 class="h5">{{page.title}}</h3>
                        <p>{{page.slogan}}</p>
                        <div class="btn btn-success">
                            {% if page.ctaButtonText %}
                            {{page.ctaButtonText}}
                            {% else %}
                            Website von {{ page.title }} besuchen!
                            {% endif %}
                        </div>
                    </div>
                </div>
            </div>
        </span>
    </div>
</div>