<meta property="og:title" content="{{page.title}}" />
<meta property="og:type" content="{{include.type}}" />
<meta property="og:url" content="{{site.url}}{{page.url}}" />
<meta property="og:image" content="{{site.url}}{{page.image}}" />
<meta property="og:description" content="{{page.shortDescription}}" />
<meta property="og:locale" content="de_DE" />
<meta property="og:site_name" content="gutes-gewissen.com" />
{% if page.media.size > 0 %}
<meta property="og:video" content="{{page.media[0]}}" />
{% endif %}