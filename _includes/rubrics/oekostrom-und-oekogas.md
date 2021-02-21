<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="strom-tab" data-toggle="tab" href="#strom" role="tab" aria-controls="strom"
            aria-selected="true">Ökostrom</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="gas-tab" data-toggle="tab" href="#gas" role="tab" aria-controls="gas"
            aria-selected="false">Ökogas</a>
    </li>
</ul>
<div class="row">
    <div class="col-autp">
        <div class="tab-content">
            <div class="tab-pane fade show active" id="strom" role="tabpanel" aria-labelledby="strom-tab">
                <div class="row d-flex align-items-center">
                    <div class="col-auto">
                        <div>Personen im Haushalt</div>
                        <div id="electricity-toggle" class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="electricityOption0" autocomplete="off">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </label>
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="electricityOption1" autocomplete="off">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </label>
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="electricityOption2" autocomplete="off">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </label>
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="electricityOption3" autocomplete="off">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="gas" role="tabpanel" aria-labelledby="gas-tab">
                <div class="row d-flex align-items-center">
                    <div class="col-auto">
                        <div>Größe Ihres Haushalts</div>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="gasOption0" autocomplete="off" checked>
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <div class="small">50 m²</div>
                            </label>
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="gasOption1" autocomplete="off">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <div class="small">100 m²</div>
                            </label>
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="gasOption2" autocomplete="off">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <div class="small">150 m²</div>
                            </label>
                            <label class="btn btn btn-outline-secondary">
                                <input type="radio" name="options" id="gasOption3" autocomplete="off">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <div class="small">Haus</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-auto">
    <div class="row">
        <div class="col-auto">
            <div>Ihr jährlicher Verbrauch</div>
            <div class="input-group">
                <input id="energyInput" type="text" class="form-control" aria-label="1500kWh">
                <div class="input-group-append">
                    <span class="input-group-text">kWh</span>
                </div>
            </div>
        </div>
        <div class="col-auto">
            <div class="form-check">
                <input class="form-check-input" onclick="setCheckboxValue()" id="minContract" type="checkbox" value="">
                <label class="form-check-label" for="defaultCheck1">
                    Ohne Mindestvertragslaufzeit
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" onclick="setCheckboxValue()" id="warranty" type="checkbox" value="">
                <label class="form-check-label" for="defaultCheck1">
                    Mit Preisgarantie
                </label>
            </div>
        </div>
    </div>
</div>
</div>


{% for anbieter in site.data.oekostrom-und-oekogas %}
{% assign anbieterIndex = forloop.index %}
{% for tarif in anbieter.tarife %}
{% assign tarifIndex = forloop.index %}
{% assign id = anbieterIndex | append: tarifIndex %}

<div id="workPrice{{id}}" data-value="{{ tarif.arbeitspreis }}"></div>
<div id="basePrice{{id}}" data-value="{{ tarif.grundpreis }}"></div>
<div id="minContract{{id}}" data-value="{{ tarif.minContract }}"></div>
<div id="cancellation{{id}}" data-value="{{ tarif.cancellation }}"></div>
<div id="warranty{{id}}" data-value="{{ tarif.warranty }}"></div>
<div id="type{{id}}" data-value="{{ tarif.typ }}"></div>

<div class="tarife-table mb-4" id="{{id}}">
    <div class="row p-2 d-flex align-items-center">
        <div class="col-2">
            <img src="{{ anbieter.logo }}" class="img-fluid">
        </div>
        <div class="col-7">
            <div class="row">
                <div class="h4 text-secondary">{{anbieter.name}} {{ tarif.name }}</div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <div class="h5 list-inline-item" id="monthlyPriceText{{id}}"></div>
                    <div class="h5 list-inline-item">pro Monat</div>
                    <div class="row">
                        <div class="col-auto">
                            <div>Arbeitspreis:</div>
                            <div>Grundpreis:</div>
                        </div>
                        <div class="col">
                            <div id="workPriceText{{id}}"></div>
                            <div id="basePriceText{{id}}"></div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="h5 list-inline-item" id="annualPriceText{{id}}"></div>
                    <div class="h5 list-inline-item">pro Jahr</div>
                    <div class="row">
                        <div class="col-auto">
                            <div>Mindestvertragslaufzeit:</div>
                            <div>Kündigungsfrist:</div>
                            <div>Preisgarantie:</div>
                        </div>
                        <div class="col">
                            <div id="minContractText{{id}}"></div>
                            <div id="cancellationText{{id}}"></div>
                            <div id="warrantyText{{id}}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="text-center">
                <div class="btn btn-success">
                    Zum Anbieter
                </div>
            </div>
        </div>
    </div>
    <hr>
</div>
{% endfor %}
{% endfor %}