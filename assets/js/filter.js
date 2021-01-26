var tarife = [];
var currentEnergy = 1500;

$(document).ready(function () {
  tarife = getData();
  updateValues();
  handleHouseholdSelection();
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
    
    var tarif = {id: id, basePrice: basePrice, workPrice: workPrice, minContract: minContract, cancellation: cancellation, warranty: warranty};
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

function handleHouseholdSelection() {
  var stromSelectorInput = "#energyInput";
  $(stromSelectorInput).val(currentEnergy);
  $("#stromOption1").click(function () {
    currentEnergy = 1500;
    $(stromSelectorInput).val(currentEnergy);
    updateValues();
  });
  $("#stromOption2").click(function () {
    currentEnergy = 2500;
    $(stromSelectorInput).val(currentEnergy);
    updateValues();
  });
  $("#stromOption3").click(function () {
    currentEnergy = 3500
    $(stromSelectorInput).val(currentEnergy);
    updateValues();
  });
  $("#stromOption4").click(function () {
    currentEnergy = 4250
    $(stromSelectorInput).val(currentEnergy);
    updateValues();
  });

  var gasSelectorInput = "#gasInput";
  currentEnergy = 5000;
  $(gasSelectorInput).val(currentEnergy);
  $("#gasOption1").click(function () {
    currentEnergy = 5000;
    $(gasSelectorInput).val(currentEnergy);
    updateValues();
  });
  $("#gasOption2").click(function () {
    currentEnergy = 12000
    $(gasSelectorInput).val(currentEnergy);
    updateValues();
  });
  $("#gasOption3").click(function () {
    currentEnergy = 18000
    $(gasSelectorInput).val(currentEnergy);
    updateValues();
  });
  $("#gasOption4").click(function () {
    currentEnergy = 35000;
    $(gasSelectorInput).val(currentEnergy);
    updateValues();
  });
}