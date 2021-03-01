<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a aria-expanded="false" aria-haspopup="false" class="navbar-brand" href="/">
            <img class="logo" src="/assets/images/logo_v1_alpha.png" alt="gutes-gewissen.com logo" />
            gutes-gewissen.com
        </a>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown dropdown-links">
                    <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle"
                        data-toggle="dropdown" id="navbarDropdown" role="button">
                        Rubriken
                    </a>
                    <div aria-labelledby="navbarDropdown" class="dropdown-menu">
                        {% for rubric in site.rubrics %}
                        <button class="dropdown-item" href="#" type="button">
                            <a href="{{ rubric.url }}">{{ rubric.title }}</a>
                        </button>
                        {% endfor %}
                    </div>
                </li>
                <li class="nav-item dropdown dropdown-links">
                    <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle"
                        data-toggle="dropdown" id="navbarDropdown" role="button">
                        Preisvergleiche
                    </a>
                    <div aria-labelledby="navbarDropdown" class="dropdown-menu">
                        {% for comparison in site.comparisons %}
                        <button class="dropdown-item" href="#" type="button">
                            <a href="{{ comparison.url }}">{{ comparison.title }}</a>
                        </button>
                        {% endfor %}
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li>
                    <a href="/ueber-uns" class="nav-link" role="button">
                        Über uns
                    </a>
                </li>
            </ul>
            {% include search.md %}
        </div>
    </div>
</nav>
<div class="header-line"></div>