{% if include.media.size > 0 %}
<h3 class="h5 my-3">{{page.title}} Videos</h3>
{% for media in include.media %}
<div class="embed-responsive embed-responsive-16by9 mb-4">
    <iframe class="embed-responsive-item" src="{{media}}" allowfullscreen></iframe>
</div>
{% endfor %}
{% endif %}