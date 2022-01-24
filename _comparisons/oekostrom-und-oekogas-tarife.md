---
layout: comparison
title: "Ökostrom & Ökogas Tarife"
headline: "Ökostrom und Ökogas im Preisvergleich – Vergleich der Tarife von unabhängigen Energieversorgern"
seoTitle: "100 % Ökostrom & Ökogas im Preisvergleich mit Tarifrechner."
description: "Ökostromtarife und Ökogastarife im Preisvergleich - Vergleich der Preise und Tarife für 100 % Ökostrom und
100 % Ökogas von unabhängigen Energieversorgern."
---

<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="strom-tab" onclick="onTabClick('strom')" data-toggle="tab" href="#strom" role="tab" aria-controls="strom"
            aria-selected="true">Ökostrom</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="gas-tab" onclick="onTabClick('gas')" data-toggle="tab" href="#gas" role="tab" aria-controls="gas"
            aria-selected="false">Ökogas</a>
    </li>
</ul>
<div class="alert alert-info">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="strom" role="tabpanel" aria-labelledby="strom-tab">
                    <div class="row d-flex align-items-center">
                        <div class="col-auto">
                            <div class="my-1"><b>Personen im Haushalt</b></div>
                            <div id="electricity-toggle" class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setPersonCount(0)" autocomplete="off">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </label>
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setPersonCount(1)" autocomplete="off">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </label>
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setPersonCount(2)" autocomplete="off">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </label>
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setPersonCount(3)" autocomplete="off">
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
                            <div class="my-1"><b>Größe Ihres Haushalts</b></div>
                            <div id="gas-toggle" class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setHouseSize(0)" autocomplete="off" checked>
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <div class="small">50 m²</div>
                                </label>
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setHouseSize(1)" autocomplete="off">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <div class="small">100 m²</div>
                                </label>
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setHouseSize(2)" autocomplete="off">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <div class="small">150 m²</div>
                                </label>
                                <label class="btn btn btn-outline-secondary">
                                    <input type="radio" name="options" onclick="setHouseSize(3)" autocomplete="off">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                    <div class="small">Haus</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-auto">
            <div class="my-1"><b>Ihr jährlicher Verbrauch</b></div>
            <div class="input-group">
                <input id="energyInput" type="text" oninput="setManualInput(this.value)" class="form-control" aria-label="1500kWh">
                <div class="input-group-append">
                    <span class="input-group-text">kWh</span>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="my-1"><b>Weitere Optionen</b></div>
            <div class="form-check">
                <input class="form-check-input" onclick="setCheckboxValue(this)" id="minContract" type="checkbox" value="" />
                <label class="form-check-label" for="minContract">
                    Ohne Mindestvertragslaufzeit
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" onclick="setCheckboxValue(this)" id="warranty" type="checkbox" value="" />
                <label class="form-check-label" for="warranty">
                    Mit Preisgarantie
                </label>
            </div>
        </div>
    </div>
</div>

<table id="tarife-table" class="table table-light tablesorter">
</table>