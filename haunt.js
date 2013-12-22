var kidnapElementAndBringItToTheNetherRealm = function(hauntee) {
  var crossingOverTime = 2000;
  var originalCorporealLevel = hauntee.css("opacity");

  hauntee.fadeTo(crossingOverTime, 0, function() {
    hauntee.fadeTo(crossingOverTime, originalCorporealLevel);
  });
};

var makeTheirHeadsSpin = function(hauntee) {
  for(var degree = 0; degree <= 720; degree++) {
    (function(degree) {
      setTimeout(function() {
        hauntee.css('-webkit-transform', 'rotate(' + degree + 'deg)');
        hauntee.css('-moz-transform', 'rotate(' + degree + 'deg)');
      }, 2 * degree);
    })(degree);
  }
};

var flyLikeCasper = function(hauntee) {
  var netherRealm = createNetherRealm();
  var ghoul = new Image();
  ghoul.src = 'media/images/spooky_ghost.png';

  var ghoulElement = $(ghoul);
  ghoulElement.css(setTopOrBottom({position: 'absolute'}, '-10em'));
  netherRealm.append(ghoulElement);

  var screenWidth = $(document).width();
  var screenHeight = $(document).height();

  ghoulElement.animate(
    setTopOrBottom({marginLeft: "+=" + screenWidth}, "+=" + screenHeight),
    2000
  );
};

var createNetherRealm = function() {
  $('body').append('<div id="hauntjs-ghost-container"></div>');
  var netherRealm = $('#hauntjs-ghost-container');
  netherRealm.css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    overflow: 'hidden'
  });

  return netherRealm;
};

var setTopOrBottom = function(stuff, value) {
  var startingPlace = randomSelection(['top', 'bottom']);
  stuff[startingPlace] = value;
  return stuff;
};

var letsGetThisWerewolfBarMitzvahStarted = function() {
  var hauntees = $('body *:not(br)');
  var haunteeIndex = Math.floor(Math.random() * hauntees.length);
  var hauntee = $(hauntees[haunteeIndex]);

  var spookyScaryHappenings = [
    kidnapElementAndBringItToTheNetherRealm,
    makeTheirHeadsSpin,
    flyLikeCasper
  ];

  randomSelection(spookyScaryHappenings).call(this, hauntee);
};

var spookThemWithSound = function() {
  var spookySounds = [
    'evil_laugh.mp3',
    'wheres_my_mummy.mp3',
    'creaky_door.mp3',
    'did_you_hear_that.mp3'
  ];
  var scarySoundFile = randomSelection(spookySounds);
  (new Audio('media/audio/' + scarySoundFile)).play();
};

var randomSelection = function(collection) {
  var selectionIndex = Math.floor(Math.random() * collection.length);
  return collection[selectionIndex];
};

$(function() {

  setInterval(function() {
    letsGetThisWerewolfBarMitzvahStarted();
  }, 5000);

  setInterval(function() {
    spookThemWithSound();
  }, 10000);

});
