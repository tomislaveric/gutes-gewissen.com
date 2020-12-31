---
websiteTitle: gutes-gewissen
---

<html lang="de">

<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161504796-1"></script>
  <script src="/assets/js/jquery-3.5.1.js"></script>
  <script src="/assets/js/popper.min.js"></script>
  <script src="/assets/js/link-masking.js"></script>
  <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
  <script src="/assets/js/scrolling.js"></script>
  <!-- AdSense - Google AdSense -->  
  <script data-ad-client="ca-pub-4092276681239296" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-161504796-1');
  </script>
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
  <title>{{ page.title }} {% if page.slogan %} | {{ page.slogan }} {% endif %}</title>

<!-- Unique/Canonical urls -->  
  <link rel="canonical" href="{{ site.url }}"/>
  <link rel="canonical" href="{{ site.url }}/ueber-uns"/>
  <link rel="canonical" href="{{ site.url }}/impressum"/>
  <link rel="canonical" href="{{ site.url }}/datenschutz"/>
    {% for rubric in site.rubrics %}
      <link rel="canonical" href="{{ site.url }}{{ rubric.url }}"/>
    {% endfor %}
</head>

<body>
  {% include header.md %}
  {{ content }}
  <footer id="footer">
    <div class="container p-3 text-center">
      <a class="btn btn-light btn-sm ml-1" href="https://twitter.com/gutes_gewissen" target="_blank">Besuche uns auf Twitter</a>
      <a class="btn btn-light btn-sm ml-1" href="/ueber-uns">Über uns</a>
      <a class="btn btn-light btn-sm mr-1" href="/impressum">Impressum</a>
      <a class="btn btn-light btn-sm ml-1" href="/datenschutz">Datenschutz</a>
    </div>
  </footer>
</body>

</html>