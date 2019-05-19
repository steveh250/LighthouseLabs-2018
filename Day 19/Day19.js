// Setup the array so I can test this outside of the challenge framework
const availableModules = [
  { name: "life-support", size: 10, enabled : false, essential: true },
  { name: "navigation",     size: 20, enabled : true , essential: true},
  { name: "propulsion",   size: 30, enabled : false, essential: true },
  { name: "communication",     size: 40, enabled : true , essential: true},
  { name: "Module 5",     size: 50, enabled : false, essential: true },
];

// Navigation var for testing
var navigation = {
      x: -2,
      y: 4,
      z: 7,
      speed: "raaaaid"
    };

// Ship var for testing
var ship = {
    powerOn: false,
    modules: [],
    antenna: {
      active: false
    }
  };

// Radio var for testing
var radio = {
  range: {
  low: 88,
  high: 108,
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};

// LARRY.quack to reset LARRY
var LARRY = {
  quack : function () {
  }
};

// Function to power on ship
function powerOn() {
  ship.powerOn = true;
}

// Count availableModules
function countModules() {
  return availableModules.length;
}

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

// Modularise findModuleIndex function to find name passed in
function findModuleIndex(moduleName) {
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].name == moduleName) {
      return i;
    }
  }
}

// Load the various modeules
loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
loadModule(findModuleIndex('navigation'));
loadModule(findModuleIndex('communication'));

// Reset Larry 10 times
function resetLARRY() {
  for (var i = 0; i < 10; i++) {
    LARRY.quack();
  }
}
resetLARRY();

// Set message on radio to stringied version of navigation
function setMessage() {
  radio.message = JSON.stringify(navigation);
}
setMessage();

// Set the beacon to true
function activateBeacon() {
  radio.beacon=true;
}
activateBeacon();

// Set the radio frequency to low plus high divided by 2
function setFrequency() {
  radio.frequency=(radio.range.low + radio.range.high) / 2;
}

// Reset the navigation variables to zero - does not need to be called
function initialize() {
  navigation.x=0;
  navigation.y=0;
  navigation.z=0;
}


// Day 13
function calibrateX() {
  var signal;
  for (var i = 0; i < 12; i++) {
    signal = checkSignal();
    
    if (signal) {
      navigation.x = signal;
      break;
    }
  }
}

// Day 14
function calibratey() {
  var signal;
  for (var i = 0; i < 60; i++) {
    signal = checkSignal();
    
    if (signal) {
      navigation.y = signal;
      break;
    }
  }
}

function calibratez() {
  var signal;
  for (var i = 0; i < 60; i++) {
    signal = checkSignal();
    
    if (signal) {
      navigation.z = signal;
      break;
    }
  }
}

// Day 15
function calibrate() {
  calibratex();
  calibratey();
  calibratez();
}

// Day 16
function setSpeed(speed) {
  var speedInt = parseInt(speed,10);
  
  if ((Math.sign(speedInt) !== -1)) {
  navigation.speed=speedInt;
  }
}

// Day 17
function activateAntenna() {
  ship.antenna.active=true;
}

// Day 18
function sendBroadcast() {
  for (var i = 0; i< 100; i++) {
      broadcast();
  }
}

// Day 19
function configureBroadcast() {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();