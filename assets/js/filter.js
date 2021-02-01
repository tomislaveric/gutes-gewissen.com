var tarife = [];
var currentEnergy = 1500;
var selectedType = "strom";
var isWarrantyActive = false;
var isMinContractActive = false;
const initialEnergyValue = 1500;
const initialGasValue = 500;

$(document).ready(function () {
  tarife = getData();
  setCheckboxValue
  setEnergy(1500);
  updateValues();
  handleHouseholdSelection();
  updateVisibility();
  handleTypeSelection();
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
    var annualPrice = ((tarife[index].workPrice / 100) * currentEnergy) + (tarife[index].basePrice * 12)

    $("#basePriceText" + id).text(formatter.format(tarife[index].basePrice));
    $("#workPriceText" + id).text(formatter.format(tarife[index].workPrice));
    $("#annualPriceText" + id).text(formatter.format(annualPrice));
    $("#monthlyPriceText" + id).text(formatter.format(annualPrice / 12));

    $("#minContractText" + id).text(tarife[index].minContract);
    $("#cancellationText" + id).text(tarife[index].cancellation);
    $("#warrantyText" + id).text(tarife[index].warranty);
  });
}

function handleTypeSelection() {
  $("#gas-tab").click(function () {
    selectedType = "gas";
    currentEnergy = 5000;
    setEnergy(currentEnergy);
    updateVisibility();
  });

  $("#strom-tab").click(function () {
    selectedType = "strom";
    currentEnergy = 1500;
    setEnergy(currentEnergy);
    updateVisibility();
  });
}

function updateVisibility() {

  var selector = "";
  tarife.forEach(function (tarif) {

    var warrantyFilter = (isWarrantyActive && tarif.warranty == "keine");
    var minContractFilter = (isMinContractActive && tarif.minContract != "keine");

    selector = $("#" + tarif.id);

    if (tarif.type == selectedType) {
      if (warrantyFilter && minContractFilter) {
        selector.hide();
      } else if (warrantyFilter) {
        selector.hide();
      } else if (minContractFilter) {
        selector.hide();
      } else {
        selector.show();
      }
    } else {
      selector.hide();
    }
  });
}

function setCheckboxValue() {
  isWarrantyActive = $("#warranty").prop("checked");
  isMinContractActive = $("#minContract").prop("checked");
  updateVisibility();
}

function setEnergy(value) {
  var selectorInput = "#energyInput";
  currentEnergy = value;
  $(selectorInput).val(currentEnergy);
  updateValues();
}

function handleHouseholdSelection() {
  $("#stromOption1").click(function () {
    setEnergy(1500);
  });

  $("#stromOption2").click(function () {
    setEnergy(2500);
  });

  $("#stromOption3").click(function () {
    setEnergy(3500);
  });

  $("#stromOption4").click(function () {
    setEnergy(4250);
  });
  
  $("#gasOption1").click(function () {
    setEnergy(5000);
  });

  $("#gasOption2").click(function () {
    setEnergy(12000);
  });

  $("#gasOption3").click(function () {
    setEnergy(18000);
  });
  $("#gasOption4").click(function () {
    setEnergy(3500);
  });
}