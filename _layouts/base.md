---
websiteTitle: gutes-gewissen
---

<html lang="de">

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161504796-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-161504796-1');
  </script>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/assets/css/main.css" />

  <title>{{ page.title }}</title>
</head>

<body>
  {% include header.md %}

  {{ content }}
  <footer class="bg-secondary">
    <div class="container p-3 text-center">
      <a class="btn btn-light btn-sm mr-1" href="/impressum">Impressum</a>
      <a class="btn btn-light btn-sm ml-1" href="/datenschutz">Datenschutz</a>
    </div>
  </footer>
</body>

</html>