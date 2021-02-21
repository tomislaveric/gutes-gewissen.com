var tarife = [];
var currentEnergy;
var selectedType = "strom";
// var isWarrantyActive = false;
// var isMinContractActive = false;

const electricity = [1500, 2500, 3500, 4250];
const gas = [5000, 12000, 18000, 35000];

$(document).ready(function () {
  tarife = getData();
  setEnergy(electricity[0]);
  handleTypeSelection();
  handleHouseholdSelection();
  updateValues();
})

function getData() {
  var dictionary = [];
  $(".tarife-table").each(function () {
    var id = $(this).attr("id");

    var basePrice = $("#basePrice" + id).attr("data-value");
    var workPrice = $("#workPrice" + id).attr("data-value");
    var minContract = $("#minContract" + id).attr("data-value");
    var cancellation = $("#cancellation" + id).attr("data-value");
    var warranty = $("#warranty" + id).attr("data-value");
    var type = $("#type" + id).attr("data-value");

    var tarif = { id: id, type: type, basePrice: basePrice, workPrice: workPrice, minContract: minContract, cancellation: cancellation, warranty: warranty };
    dictionary.push(tarif);
    
    return this.innerHTML;
  }).get();
  return dictionary;
}

function updateValues() {
  $(".tarife-table").each(function (index) {
    var id = $(this).attr("id");
    var formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    });
    var tarif = tarife[index];
    var annualPrice = getAnnualPrice(tarif.basePrice, tarif.workPrice, currentEnergy);
    $("#basePriceText" + id).text(formatter.format(tarif.basePrice));
    $("#workPriceText" + id).text(formatter.format(tarif.workPrice));
    $("#annualPriceText" + id).text(formatter.format(annualPrice));
    $("#monthlyPriceText" + id).text(formatter.format(annualPrice / 12));

    $("#minContractText" + id).text(tarif.minContract);
    $("#cancellationText" + id).text(tarif.cancellation);
    $("#warrantyText" + id).text(tarif.warranty);

    if (tarif.type == selectedType) {
      $("#" + tarif.id).show()
    } else {
      $("#" + tarif.id).hide()
    }
  });
}

function getAnnualPrice(basePrice, workPrice, energy) {
  return ((workPrice / 100) * energy) + (basePrice * 12);
}

function handleTypeSelection() {
  $("#gas-tab").click(function () {
    selectedType = "gas";
    $("#gasOption0").trigger("click");
    setEnergy(gas[0]);
  });

  $("#strom-tab").click(function () {
    selectedType = "strom";
    $("#electricityOption0").trigger("click");
    setEnergy(electricity[0]);
  });
}

// function setCheckboxValue() {
//   isWarrantyActive = $("#warranty").prop("checked");
//   isMinContractActive = $("#minContract").prop("checked");
//   updateVisibility();
// }

function setEnergy(value) {
  var selectorInput = "#energyInput";
  currentEnergy = value;
  $(selectorInput).val(currentEnergy);
  updateValues();
}

function handleHouseholdSelection() {

  $(".btn-group-toggle input:radio").on('change', function() {
    var selectedId = $(this).attr('id');
    var stromId = selectedId.slice("electricityOption".length);
    var gasId = selectedId.slice("gasOption".length);

    if (stromId) {
      setEnergy(electricity[stromId]);      
    } else if (gasId) {
      setEnergy(gas[gasId]);      
    }
  })
}