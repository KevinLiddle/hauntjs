var travelToTheNetherrealmAndBack = function(hauntee) {
  var crossingOverTime = 2000;
  var originalCorporealLevel = hauntee.css("opacity");

  hauntee.fadeTo(crossingOverTime, 0, function() {
    hauntee.fadeTo(crossingOverTime, originalCorporealLevel);
  });
};

var ghostsLikeToSpinRight = function(hauntee) {
  for(var degree = 0; degree <= 360; degree++) {
    (function(degree) {
      setTimeout(function() {
        hauntee.css('-webkit-transform', 'rotate(' + degree + 'deg)');
        hauntee.css('-moz-transform', 'rotate(' + degree + 'deg)');
      }, 2 * degree);
    })(degree);
  }
};

var spookyScaryHappenings = [
  travelToTheNetherrealmAndBack,
  ghostsLikeToSpinRight
];

var letsGetThisWerewolfBarmitzvahStarted = function() {
  var hauntees = $('body *:not(br)');
  var haunteeIndex = Math.floor(Math.random() * hauntees.length);
  var hauntee = $(hauntees[haunteeIndex]);

  randomSelection(spookyScaryHappenings).call(this, hauntee);
};

var hauntingCanBeFunny = function() {
  var spookySounds = [
    'evil_laugh.mp3',
    'demon_mocking_bird.mp3',
    'wheres_my_mummy.mp3',
    'creaky_door.mp3',
    'the_big_reveal.mp3'
  ];
  var scarySoundFile = randomSelection(spookySounds);
  new Audio(scarySoundFile).play();
};

var randomSelection = function(collection) {
  var selectionIndex = Math.floor(Math.random() * collection.length);
  return collection[selectionIndex];
};

$(function() {

  setInterval(function() {
    letsGetThisWerewolfBarmitzvahStarted();
  }, 5000);

  setInterval(function() {
    hauntingCanBeFunny();
  }, 10000);

});
