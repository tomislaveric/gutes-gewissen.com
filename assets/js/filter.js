const electricity = [1500, 2500, 3500, 4250];
const gas = [5000, 12000, 18000, 35000];

var tarife = [];
var currentEnergy = electricity[0];
var selectedType = "strom";;
var data = null;

$(document).ready(function () {
  loadData();
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
  reload();
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
  reload();
}

function setManualInput(input) {
  currentEnergy = input;
  resetActiveHousehold(selectedType);
  reload();
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
    style: "currency",
    currency: "EUR"
  });
}

function getAnnualPrice(tarif) {
  return ((tarif.arbeitspreis / 100) * currentEnergy) + (tarif.grundpreis * 12);
}

function createTable() {
  $('#tarife-table')
.append(`
<thead>
<tr>
    <th class="table-company-col">Versorger</th>
    <th>Preis pro Jahr</th>
    <th>Preis pro Monat</th>
    <th>Arbeitspreis</th>
    <th>Grundpreis</th>
    <th class="table-details-col">Details</th>
</tr>
</thead>
<tbody>
`)
  reload();
  $('#tarife-table')
  .append(`
    </tbody>
  `);
  initializeSort();
}

function reload() {
  $('#tarife-table > tbody').empty();
  $.each(data, function (anbieterKey, anbieter) {
    $.each(anbieter.tarife, function (tarifKey, tarif) {
      var isHidden = selectedType == tarif.typ ? "" : "style='display:none;'";
      var annualPrice = toEuro(getAnnualPrice(tarif));
      var monthlyPrice = toEuro(getAnnualPrice(tarif) / 12);
      var workingPrice = toEuro(tarif.arbeitspreis);
      var basePrice = toEuro(tarif.grundpreis);
      
      $('#tarife-table tbody').append(`
      <tr id="`+ tarif.typ + tarif.id + `"` + isHidden +`">
      <td>
        <div>` + tarif.name + `</div>
        <img src="` + anbieter.logo + `" class="tarife-table-img">
      </td>
      <td>` + annualPrice + `</td>
      <td>` + monthlyPrice + `</td>
      <td>` + workingPrice + `</td>
      <td>` + basePrice + `</td>
      <td>` + annualPrice + `</td>
      </tr>
      `);
    });
});
}

function initializeSort() {
  $('#tarife-table').tablesorter({
    theme: 'bootstrap',
    headers: {
      '.table-details-col' : {
        sorter: false
      }
    }
  });
}

function loadData() {
  $.getJSON("/assets/data/oekostrom-und-oekogas.json", function (result) {
    data = result;
    createTable()
  });
}