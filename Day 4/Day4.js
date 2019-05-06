// Function to power on ship
function powerOn() {
  ship.powerOn = true;
}

// Count availableModules
function countModules() {
	return availableModules.length;
}

function countEssential() {
  // Setup variable to count essential modules
  var essentialModules = 0;
  
  // Loop around the modules in the array
  for (var i = 0; i < countModules(); i++) {
  	// Check is module has essential property
    if (availableModules[i].essential) {
    	// Incerement the essential modules count
      essentialModules++;
    } 
  }
  // Finished counting and return the count
  return essentialModules;
}

// Load a set enabled to true based on index passed in
function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

// Loop through the module to find life-supprt and pass it 
// to loadModule
function loadIntoShip() {
  for (var i = 0; i < countModules(); i++) {
    if (availableModules[i].name == 'life-support') {
      loadModule(i);
    }
  }
}
loadIntoShip();