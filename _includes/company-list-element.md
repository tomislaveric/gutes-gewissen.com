<div class="col mb-4">
    <div class="card h-100">
    <a href="{{ post.url }}" class="black-link">
        <div class="card-header bg-transparent">
            <h2 class="h5 mt-0">{{ post.title }}
            <div class="text-muted h6 mt-1">{{ post.slogan }}</div>
            </h2>
        </div>
        </a>
        <div class="row no-gutters h-100 position-relative">
            <div class="col-lg-4 pr-4 pl-2 align-self-center">
                <img src="{{ post.image }}" class="card-img m-2" alt="{{ post.title }} logo">
            </div>
            <div class="col-lg-8 position-static p-2 pl-md-0">
                <p>{{ post.description | strip_html | truncatewords: 25 }}
                    <a href="{{post.url}}" class="stretched-link" rel="nofollow">weiter</a>
                </p>
            </div>
        </div>
        <div class="card-footer bg-transparent">
            <div class="text-muted footer-text">Hinzugefügt zu <a href="{{post.categories[0]}}" rel="nofollow">{{post.rubric}}</a></div>
        </div>
    </div>
</div>
