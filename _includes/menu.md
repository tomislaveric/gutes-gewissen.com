<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a aria-expanded="false" aria-haspopup="false" class="navbar-brand" href="/">
            <img alt="gutes-gewissen.com logo" class="logo" src="/assets/images/logo_v1_alpha.png" }}/>
            gutes-gewissen.com
        </a>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown dropdown-links">
                    <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdown" role="button">
                        Rubriken
                    </a>
                    <div aria-labelledby="navbarDropdown" class="dropdown-menu">
                        {% for rubric in site.rubrics %}
                            <button class="dropdown-item" href="#" type="button">
                                <a href="{{ rubric.url }}">{{ rubric.title }}</a>
                            </button>
                        {% endfor %}
                    </div>
                </li>
            </ul>
            <div class="dropdown">
                <input aria-expanded="false" aria-haspopup="true" autocomplete="off" class="form-control dropdown-toggle" data-toggle="dropdown" id="search-input" placeholder="Live Suche!" type="text"/>
                <div class="dropdown-menu dropdown-links" id="results-container"></div>

            </div>
        </div>
    </div>
</nav>

<!-- Script pointing to search-script.js -->
<script src="/assets/js/simple-jekyll-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<div class="dropdown-item m-2"><img class="search-result-img" src="{{site.image}}{image}"/><a class="ml-2" href="{{ site.url }}{url}">{title}</a></div>'
  });
</script>
