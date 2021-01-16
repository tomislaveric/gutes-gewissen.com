{% for anbieter in site.data.oekostrom-und-oekogas %}
{{ anbieter.name }}
    {% for tarif in anbieter.tarife %}
        {{ tarif.name }}
    {% endfor %}
{% endfor %}