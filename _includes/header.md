<div class="sticky-top bg-success header">
  <div class="container">
    <div class="custom-search-input">
      <div class="input-group">
        <div class="input-group-prepend">
          <a
            href="/"
            class="btn btn-outline-success btn-sm"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img class="logo" src='/assets/images/logo_v1_alpha.png' }} />
          </a>
        </div>
        <input
          id="search-input"
          type="text"
          class="form-control"
          placeholder="Live Suche! Einfach beliebigen Suchbegriff eingeben"
          autocomplete="off"
        />
      </div>
      <div class="btn-group mt-2" role="group" aria-label="First group">
        {% for rubric in site.rubrics %}
        <a href="{{ rubric.url }}" class="btn btn-linkt text-light btn-sm">{{ rubric.title }}</a>
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="overlay container-fluid">
    <div class="container" id="results-container"></div>
  </div>
</div>

<!-- Script pointing to search-script.js -->
<script src="/assets/js/simple-jekyll-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
  });
</script>
