<div>
  {% include menu.md %}
</div>
<div class="d-none d-xl-block">
  <div class="position-fixed">
    <div id="cta-bar" class="cta-bar">
      <div class="card" style="width: 12vw;">
        <img class="card-img-top p-2" src="{{page.image}}" alt="Card image cap">
        <div class="card-body text-center">
          <p class="card-text">{{page.slogan}}</p>
          <span class="affili" data-affili="{{ page.targetUrl }}" rel="{% if page.relType %}{{page.relType}}{% else %}sponsored{% endif %}">
            <div class="btn btn-success">
              Besuche {{page.title}}
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>