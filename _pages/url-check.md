---
title: URLCHECK
layout: base
permalink: url-check
---
{% for post in site.posts %}
{% raw %}
<?php
$file = '{% endraw %}{{ post.targetUrl }}{% raw %}';
$title = '{% endraw %}{{ post.title }}{% raw %}';
$file_headers = @get_headers($file);
$content = file_get_contents($file);
if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
    echo $title . " -> " . "NOT FOUND";
} else if (str_contains($content, 'This link is inactive')) {
    echo $title . " -> " . "INACTIVE";
} else {
    echo $title . " -> " . "OK";
}
?>
{% endraw %}
{% endfor %}