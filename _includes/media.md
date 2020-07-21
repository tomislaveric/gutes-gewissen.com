{% if include.media.size > 0 %}
<h3 class="h5 my-3">{{page.title}} Videos</h3>
<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="{{include.media}}" allowfullscreen></iframe>
</div>
{% endif %}