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
<div class="tab-content">
    <div class="tab-pane fade show active" id="strom" role="tabpanel" aria-labelledby="strom-tab">
        <div class="alert alert-success">
            <div class="row d-flex align-items-center">
                <div class="col-auto">
                    <div>Personen im Haushalt</div>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="stromOption1" autocomplete="off" checked>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </label>
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="stromOption2" autocomplete="off">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </label>
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="stromOption3" autocomplete="off">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </label>
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="stromOption4" autocomplete="off">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </label>
                    </div>
                </div>
                <div class="col-auto">
                    <div>Ihr jährlicher Verbrauch</div>
                    <div class="input-group">
                        <input id="energyInput" type="text" class="form-control" aria-label="1500kWh">
                        <div class="input-group-append">
                            <span class="input-group-text">kWh</span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Ohne Mindestvertragslaufzeit
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Mit Preisgarantie
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="gas" role="tabpanel" aria-labelledby="gas-tab">
        <div class="alert alert-info" role="alert">
            <div class="row d-flex align-items-center">
                <div class="col-auto">
                    <div>Größe Ihres Haushalts</div>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="gasOption1" autocomplete="off" checked>
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <div class="small">50 m²</div>
                        </label>
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="gasOption2" autocomplete="off">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <div class="small">100 m²</div>
                        </label>
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="gasOption3" autocomplete="off">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <div class="small">150 m²</div>
                        </label>
                        <label class="btn btn btn-outline-secondary">
                            <input type="radio" name="options" id="gasOption4" autocomplete="off">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <div class="small">Haus</div>
                        </label>
                    </div>
                </div>
                <div class="col-3">
                    <div>Ihr jährlicher Verbrauch</div>
                    <div class="input-group">
                        <input id="gasInput" type="text" class="form-control" aria-label="1500kWh">
                        <div class="input-group-append">
                            <span class="input-group-text">kWh</span>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Ohne Mindestvertragslaufzeit
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Mit Preisgarantie
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


{% for anbieter in site.data.oekostrom-und-oekogas %}
{{ anbieter.name }}
{% for tarif in anbieter.tarife %}
{{ tarif.name }}
{% endfor %}
{% endfor %}