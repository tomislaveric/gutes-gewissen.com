{% assign alternatives = site.posts | where: "categories", include.category%}
{% if alternatives.size > 1 %}
<h3 class="h5 my-3">{{page.title}} Alternativen</h3>
{% for post in alternatives limit:6 %}
{% if post.title != page.title%}
<div class="card mb-2">
    <a href="{{post.url}}" rel="nofollow">
        <div class="card-body align-items-center d-flex justify-content-center">
            <img src="{{post.image}}" class="alternative-list-img" alt="{{ page.title }} logo">
        </div>
    </a>
</div>
{% endif%}
{% endfor %}
{% endif %}