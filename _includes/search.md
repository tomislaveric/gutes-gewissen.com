<div class="dropdown">
  <input aria-expanded="false" aria-haspopup="true" autocomplete="off" class="form-control dropdown-toggle"
    data-toggle="dropdown" id="search-input" placeholder="Live Suche!" type="text" />
  <div class="dropdown-menu dropdown-links" id="results-container"></div>
</div>


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