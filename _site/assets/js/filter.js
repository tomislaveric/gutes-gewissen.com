$(document).ready(function () {
  var stromSelectorInput = "#energyInput";
  $(stromSelectorInput).val(1500);
    $("#stromOption1").click(function() {
      $(stromSelectorInput).val(1500);
    });
    $("#stromOption2").click(function() {
      $(stromSelectorInput).val(2500);
    });
    $("#stromOption3").click(function() {
      $(stromSelectorInput).val(3500);
    });
    $("#stromOption4").click(function() {
      $(stromSelectorInput).val(4250);
    });

  var gasSelectorInput = "#gasInput";
  $(gasSelectorInput).val(5000);
    $("#gasOption1").click(function() {
      $(gasSelectorInput).val(5000);
    });
    $("#gasOption2").click(function() {
      $(gasSelectorInput).val(12000);
    });
    $("#gasOption3").click(function() {
      $(gasSelectorInput).val(18000);
    });
    $("#gasOption4").click(function() {
      $(gasSelectorInput).val(35000);
    });
})