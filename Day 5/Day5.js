// Setup the array so I can test this outside of the challenge framework
const availableModules = [
  { name: "life-support", size: 10, enabled : false, essential: true },
  { name: "Module 2",     size: 20, enabled : true , essential: false},
  { name: "propulsion",   size: 30, enabled : false, essential: true },
  { name: "Module 4",     size: 40, enabled : true , essential: false},
  { name: "Module 5",     size: 50, enabled : false, essential: true },
];

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
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
  console.log("loadModule " + availableModules[index].name);
}

// Modularise function to find name passed in
function findModuleIndex(moduleName) {
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].name == moduleName) {
console.log("Found module " + moduleName);
      loadModule(i);
    }
  }
}

// Find the propulsion module
findModuleIndex('life-support');
findModuleIndex('propulsion');

console.log("ship.modules : " + ship.modules[0].name + " " + ship.modules[1].name);