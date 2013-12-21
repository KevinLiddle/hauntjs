var travelToTheNetherrealmAndBack = function(hauntee) {
  var crossingOverTime = 2000;
  var originalCorporealLevel = hauntee.css("opacity");

  hauntee.fadeTo(crossingOverTime, 0, function() {
    hauntee.fadeTo(crossingOverTime, originalCorporealLevel);
  });
};

var spookyScaryHappenings = [
  travelToTheNetherrealmAndBack
];

var letsGetThisWerewolfBarmitzvahStarted = function() {
  var hauntees = $('body *:not(br)');
  var haunteeIndex = Math.floor(Math.random() * hauntees.length);
  var hauntee = $(hauntees[haunteeIndex]);

  var pantsCrappingMethodIndex = Math.floor(Math.random() * spookyScaryHappenings.length);
  spookyScaryHappenings[pantsCrappingMethodIndex].call(this, hauntee);
};

$(function() {
  setInterval(function() {
    letsGetThisWerewolfBarmitzvahStarted();
  }, 5000);
});
