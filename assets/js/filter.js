const electricity = [1500, 2500, 3500, 4250];
const gas = [5000, 12000, 18000, 35000];

var tarife = [];
var currentEnergy = electricity[0] ;
var selectedType = "strom";
var isWarrantyActive = false;
var isMinContractActive = false;

$(document).ready(function () {
  tarife = getData();
  setHousehold(0);
  updateValues();
  
  handleTypeSelection();
  handleHouseholdSelection();
  handleSortSelection();
  handleInput();
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
    
    var formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    });
    
    $("#basePriceText" + id).text(formatter.format(basePrice));
    $("#workPriceText" + id).text(formatter.format(workPrice));
    $("#minContractText" + id).text(minContract);
    $("#cancellationText" + id).text(cancellation);
    $("#warrantyText" + id).text(warranty);

    var tarif = { id: id, type: type, basePrice: basePrice, workPrice: workPrice, minContract: minContract, cancellation: cancellation, warranty: warranty };
    dictionary.push(tarif);

    return this.innerHTML;
  }).get();
  
  return dictionary;
}

function updateValues() {
  var formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });

  tarife.forEach((tarif) => {
    var id = tarif.id;
    var annualPrice = ((tarif.workPrice / 100) * currentEnergy) + (tarif.basePrice * 12);
    var monthlyPrice = annualPrice/12;
    
    $("#annualPriceText" + id).text(formatter.format(annualPrice));
    $("#monthlyPriceText" + id).text(formatter.format(monthlyPrice));

    var element = $("#" + id)
    if (tarif.type == selectedType) {
      if (shouldHideWarranty(tarif.warranty) || shouldHideMinContract(tarif.minContract)) {
        element.hide();
      } else {
        element.show()
      }
    } else {
      element.hide();
    }
  });
  tarife.sort(sortByAnnualPrice);
}

// function recalculate(tarif) {
//   tarif.annualPrice = getAnnualPrice(tarif.basePrice, tarif.workPrice, currentEnergy);
//   tarif.monthlyPrice = tarif.annualPrice/12;
//   return tarif
// }

function shouldHideWarranty(warranty) {
  return warranty == "keine" && $("#warranty").prop("checked");
}
function shouldHideMinContract(minContract) {
  return minContract != "keine" && $("#minContract").prop("checked");
}

// function getAnnualPrice(basePrice, workPrice, energy) {
//   return ((workPrice / 100) * energy) + (basePrice * 12);
// }

function handleTypeSelection() {
  $("#gas-tab").click(function () {
    selectedType = "gas"
    setHousehold(0)
  });

  $("#strom-tab").click(function () {
    selectedType = "strom"
    setHousehold(0)
  });
}

function setHousehold(id) {
  
  $("#electricityOption"+id).trigger("click");
  if (selectedType == "strom" ){
    setEnergy(electricity[id]);
  } else {
    setEnergy(gas[id]);
  }
}


function setCheckboxValue() {
  updateValues();
}

function setEnergy(value) {
  var selectorInput = "#energyInput";
  currentEnergy = value;
  $(selectorInput).val(currentEnergy);
  updateValues();
}

function handleInput() {
  var selector = $("#energyInput");
  selector.on('input', () => {
    var value = selector.val();
    currentEnergy = value;
    updateValues();
  });
}

function handleHouseholdSelection() {

  $(".btn-group-toggle input:radio").on('change', function () {
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

function handleSortSelection() {
  $("#sortSelection").change(() => {
    var selection = $('#sortSelection option:selected').attr('value');
    switch (parseInt(selection)) {
      case 1:
        tarife.sort(sortByAnnualPrice);
        break;
      case 2:
        tarife.sort(sortByBasePrice);
        break;
      case 3:
        tarife.sort(sortByWorkPrice);
        break;
    }
    updateValues();
  });
}

function sortByAnnualPrice(a, b) {
  var a1 = parseFloat(a.annualPrice), b1 = parseFloat(b.annualPrice);
  if (a1 == b1) return 0;
  return a1 > b1 ? 1 : -1;
}

function sortByBasePrice(a, b) {
  
  var a1 = parseFloat(a.basePrice), b1 = parseFloat(b.basePrice);
  if (a1 == b1) return 0;
  return a1 > b1 ? 1 : -1;
}

function sortByWorkPrice(a, b) {
  var a1 = parseFloat(a.workPrice), b1 = parseFloat(b.workPrice);
  if (a1 == b1) return 0;
  return a1 > b1 ? 1 : -1;
}
