---
websiteTitle: gutes-gewissen
---

<html lang="de">

<head>
  <script src="/assets/js/jquery-3.6.0.min.js" type="text/javascript"></script>
  <script src="/assets/js/jquery.tablesorter.min.js" type="text/javascript"></script>
  <script src="/assets/js/popper.min.js" type="text/javascript"></script>
  <script src="/assets/js/link-masking.js" type="text/javascript"></script>
  <script src="/assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="/assets/js/scrolling.js" type="text/javascript"></script>
  <script src="/assets/js/filter.js" type="text/javascript"></script>
  <!-- Matomo -->
  <script>
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function () {
      var u = "//analytics.gutes-gewissen.com/";
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', '1']);
      var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
    })();
  </script>
  <!-- End Matomo Code -->

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description"
    content="{% if page.shortDescription %}{{ page.shortDescription }}{% else %}{{ page.description }}{% endif %}">
  <meta name="keywords" content="{{ page.tags | join: ', ' }}">
  {% if page.layout == 'site' %}
  {% include open-graph.md type="product" %}
  {% elsif page.layout == 'rubric' %}
  {% include open-graph.md type="article" %}
  {% endif %}

  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/assets/css/main.css" />
  <link rel="stylesheet" href="/assets/fontawesome/css/font-awesome.min.css" />
  <title>{% if page.seoTitle %}{{page.seoTitle}}{% else %}{{ page.title }} {% if page.slogan %} | {{ page.slogan }} {%
    endif %}{% endif %}</title>
  <link rel="stylesheet" href="/assets/css/theme.bootstrap_4.min.css">
  <!-- Unique/Canonical urls -->
  <link rel="canonical" href="{{ site.url }}/ueber-uns" />
  <link rel="canonical" href="{{ site.url }}/impressum" />
  <link rel="canonical" href="{{ site.url }}/datenschutz" />
  {% for rubric in site.rubrics %}
  <link rel="canonical" href="{{ site.url }}{{ rubric.url }}" />
  {% endfor %}
</head>

<body>
  {% include header.md %}
  {{ content }}
  <footer id="footer">
    <div class="container p-3 text-center">
      <a class="btn btn-light btn-sm ml-1" href="https://twitter.com/gutes_gewissen" target="_blank">Besuche uns auf
        Twitter</a>
      <a class="btn btn-light btn-sm ml-1" href="/ueber-uns">Über uns</a>
      <a class="btn btn-light btn-sm mr-1" href="/impressum">Impressum</a>
      <a class="btn btn-light btn-sm ml-1" href="/datenschutz">Datenschutz</a>
    </div>
  </footer>
</body>

</html>