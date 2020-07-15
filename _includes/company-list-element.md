<div class="col mb-4">
    <div class="card h-100">
    <a href="{{ post.url }}" ref="nofollow" class="black-link">
        <div class="card-header bg-transparent">
            <h1 class="h5 mt-0">{{ post.title }}</h1>
            <div class="text-muted">{{ post.slogan }}</div>
        </div>
        </a>
        <div class="row no-gutters h-100 position-relative">
            <div class="col-lg-4 pr-4 pl-2 align-self-center">
                <img src="{{ post.image }}" class="card-img m-2" alt="{{ post.title }} logo">
            </div>
            <div class="col-lg-8 position-static p-2 pl-md-0">
                <p>{{ post.description | strip_html | truncatewords: 25 }}
                    <a href="{{post.url}}" class="stretched-link" ref="nofollow">weiter</a>
                </p>
            </div>
        </div>
        <div class="card-footer bg-transparent">
            <div class="text-muted footer-text">Hinzugefügt am {{post.date | date: "%d.%m.%Y"}} in <a href="{{post.categories[0]}}">{{post.rubric}}</a></div>
        </div>
    </div>
</div>
