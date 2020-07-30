<meta property="og:title" content="{{page.title}}" />
<meta property="og:type" content="{{include.type}}" />
<meta property="og:url" content="{{site.url}}{{page.url}}" />
<meta property="og:image" content="{{site.url}}{{page.image}}" />
<meta property="og:description" content="{{page.shortDescription}}" />
<meta property="og:locale" content="de_DE" />
<meta property="og:site_name" content="gutes-gewissen.com" />
{% for video in page.media %}
<meta property="og:video" content="{{video}}" />
{% endfor %}