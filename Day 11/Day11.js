// Setup the array so I can test this outside of the challenge framework
const availableModules = [
  { name: "life-support", size: 10, enabled : false, essential: true },
  { name: "navigation",     size: 20, enabled : true , essential: true},
  { name: "propulsion",   size: 30, enabled : false, essential: true },
  { name: "communication",     size: 40, enabled : true , essential: true},
  { name: "Module 5",     size: 50, enabled : false, essential: true },
];

var navigation = {
      x: -2,
      y: 4,
      z: 7,
      speed: "raaaaid"
    };

var ship = {
    powerOn: false,
    modules: [],
    antenna: {
      active: false
    }
  };

var radio = {
  range: {
  low: 88,
  high: 108,
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};

// LARRY.quack to resst LARRY
var LARRY = {
  quack : function () {
    console.log("Quack");
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

// Modularise function to find name passed in
function findModuleIndex(moduleName) {
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].name == moduleName) {
      return i;
    }
  }
}

// Find the propulsion module
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
  console.log(radio.message);
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
  console.log("Radio range low " + radio.range.low);
  console.log("Radio range high " + radio.range.high);
  console.log("Radio frequency " + radio.frequency);
}

setFrequency();