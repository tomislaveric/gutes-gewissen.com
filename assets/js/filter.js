const electricity = [1500, 2500, 3500, 4250];
const gas = [5000, 12000, 18000, 35000];

var tarife = [];
var currentEnergy = electricity[0];
var selectedType = "strom";;
var data = null;

$(document).ready(function () {
  initializeTable();
  resetActiveHousehold(selectedType);
  setCheckboxValue();
  setEnergy(currentEnergy);
})

function setPersonCount(id) {
  setEnergy(electricity[id]);
}

function setHouseSize(id) {
  setEnergy(gas[id]);
}

function onTabClick(value) {
  selectedType = value;
  resetEnergy(value);
  update();
}

var warrantyChecked = false;
var minContractChecked = false;

function setCheckboxValue() {
  warrantyChecked = $("#warranty").prop("checked");
  minContractChecked = $("#minContract").prop("checked");
  handleVisibility();
}

function resetEnergy(type) {
  switch (type) {
    case "strom":
      var index = getActiveIndexOf("#electricity-toggle");
      currentEnergy = electricity[index];
      break;
    case "gas":
      var index = getActiveIndexOf("#gas-toggle");
      currentEnergy = gas[index];
      break;
  }
}

function getActiveIndexOf(toggle) {
  var activeIndex = 0;
  $(toggle).each(function () {
    $(this.children).each(function (index) {
      if ($(this).hasClass("active")) {
        activeIndex = index;
      }
    })
  });
  return activeIndex;
}

function setEnergy(value) {
  currentEnergy = value;
  $("#energyInput").val(currentEnergy);
  update();
}

function setManualInput(input) {
  currentEnergy = input;
  resetActiveHousehold(selectedType);
  update();
}

function resetActiveHousehold(currentSelection) {
  var existingIndex = null;
  if (currentSelection == "strom") {
    existingIndex = electricity.indexOf(parseInt(currentEnergy))
  }
  else if (currentSelection == "gas") {
    existingIndex = gas.indexOf(parseInt(currentEnergy))
  }

  if (existingIndex > -1) {
    var toggle = currentSelection == "strom" ? "#electricity-toggle" : "#gas-toggle";
    $(toggle).each(function () {
      $(this.children).each(function (index) {
        if (existingIndex == index) {
          ($(this).addClass("active"))
        }
      })
    });
  }
  else {
    var toggle = currentSelection == "strom" ? "#electricity-toggle" : "#gas-toggle";
    $(toggle).each(function () {
      $(this.children).each(function (index) {
        ($(this).removeClass("active"))
      })
    });
  }
}

function toEuro(value) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function getAnnualPrice(workPrice, basePrice) {
  return ((workPrice / 100) * currentEnergy) + (basePrice * 12);
}

function createTable() {
  $('#tarife-table').append(`
<thead>
<tr id="table-header">
    <th class="table-company-col">Versorger</th>
    <th>Jahrespreis</th>
    <th>Monatspreis</th>
    <th>Arbeitspreis</th>
    <th>Grundpreis</th>
    <th class="table-details-col"></th>
</tr>
</thead>
`)
  $('#tarife-table').append('<tbody>');
  $.each(data, function (anbieterKey, anbieter) {
    $.each(anbieter.tarife, function (tarifKey, tarif) {
      $('#tarife-table tbody').append(`
      <tr class="tarif" id="`+ tarif.id + `" data-type="`+ tarif.typ +`"">
      <td class="company-col">
        <div class="row">
          <div class="col-6">
          <img src="` + anbieter.logo + `" class="tarife-table-img">
          </div>
          <div class="col-6">
          <div class="h5">` + tarif.name + `</div>
          </div>
        </div>
      <div class="row">
      <div class="col-6">
      <small>Mindestvertrafslaufzeit</small>
      </div>
      <small><div id="minContract`+ tarif.id +`" class="col-6">` + tarif.minContract + `</small></div>
      </div>
      <div class="row">
      <div class="col-6">
      <small>Preisgarantie</small>
      </div>
      <small><div id="warranty`+ tarif.id +`" class="col-6">` + tarif.warranty + `</small></div>
      </div>
      <div class="row">
      <div class="col-6">
      <small>Kündigungsfrist</small>
      </div>
      <small><div id="cancellation`+ tarif.id +`" class="col-6">` + tarif.cancellation + `</small></div>
      </div>
        
      </td>
      <td id="annualPrice" class="h5 table-annualprice"></td>
      <td id="monthlyPrice" class="h5"></td>
      <td class="bla" id="workPrice" data-value="` + tarif.arbeitspreis + `"></td>
      <td id="basePrice" data-value="` + tarif.grundpreis + `"></td>
      <td id="detail">
      <span class="affili" data-affili="`+ anbieter.url +`" rel="nofollow">
      <div class="text-center mb-3">
          <div class="btn btn-success mt-4 mb-3">
              Gehe zum Anbieter
          </div>
      </div>
  </span>
      </td>
      </tr>
      `);
    });
  });
}

function update() {
  handleVisibility();
  updateValues();
}

function handleVisibility() {
  $('#tarife-table tr').each(function (index, row) {
    var type = $(row).data().type;
    if (!type) { return; }
    var warranty = $('#warranty' + row.id).text();
    var minContract = $('#minContract' + row.id).text();
    if ((warrantyChecked && warranty == "keine") || (minContractChecked && minContract != "keine")) {
      $(row).hide(200);
    } else {
      if (type.startsWith(selectedType)) {
        $(row).show(200);
      } else {
        $(row).hide(200);
      }
    }
  });
}

function updateValues() {
  $('#tarife-table tr').each(function (index, tr) {
    var workPrice = 0;
    var basePrice = 0;
    $(tr).find('td').each(function (index, td) {
      switch (td.id) {
        case "workPrice":
          workPrice = $(td).data().value;
          $(td).html(toEuro(workPrice) + " Ct/kWh");
          break;
        case "basePrice":
          basePrice = $(td).data().value;
          $(td).html(toEuro(basePrice) + " €/Monat");
          break;
      }
    });
    $(tr).find("td[id='annualPrice']").html(toEuro(getAnnualPrice(workPrice, basePrice)) + " €");
    $(tr).find("td[id='monthlyPrice']").html(toEuro(getAnnualPrice(workPrice, basePrice) / 12) + " €");
  });
}

function initializeSort() {
  $("#tarife-table thead th:eq(4)").data("sorter", false);
  $("#tarife-table thead th:eq(0)").data("sorter", false);
  $('#tarife-table').tablesorter({
    theme: 'bootstrap',
    sortList : [[2,0]],
    headers: {
      0 : { sorter: false },
      5 : { sorter: false }
    }
  });
  
}

function initializeTable() {
  $.getJSON("/assets/data/oekostrom-und-oekogas.json", function (result) {
    data = result;
    createTable();
    update();
    initializeSort();
  });
}