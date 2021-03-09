<div id="ctaBar" class="fixed-bottom border-top">
    <div class="container bg-white">
        <span class="affili" data-affili="{{ page.targetUrl }}" rel="nofollow">
            <div class="row py-2 align-items-center">
                <div class="col-auto">
                    <img src="{{page.image}}" class="img-cta-bar d-none d-lg-block" />
                </div>
                <div class="col-auto">
                    <div class="d-none d-lg-block">
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
                <div class="col d-lg-none">
                    <div class="text-center">
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