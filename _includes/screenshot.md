<h3>Die Website von {{ page.title }}</h3>
<span class="affili" data-affili="{{ page.targetUrl }}" rel="{% if page.relType %}{{page.relType}}{% else %}nofollow{% endif %}">
    <img src="{{ page.screenshot }}" class="img-fluid" alt="Website Vorschau von {{ page.title }}" />
</span>