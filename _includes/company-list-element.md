<div class="col mb-4">
    <div class="card h-100">
        <div class="card-header">
        <a href="{{ post.categories[0] }}" rel="nofollow">{{ post.rubric }}</a>
        <div>{{ post.slogan }}</div>
        </div>
        <div class="row no-gutters position-relative">
            <div class="col-lg-4 pr-4 pl-2 align-self-center">
                <img src="{{ post.image }}" class="card-img m-2" alt="{{ post.title }} logo">
            </div>
            <div class="col-lg-8 position-static p-2 pl-md-0">
                <h5 class="mt-0">{{ post.title }}</h5>
                <p>{{ post.description | strip_html | truncatewords: 25 }}
                    <a href="{{post.url}}" class="stretched-link">weiter</a>
                </p>
            </div>
        </div>
    </div>
</div>
