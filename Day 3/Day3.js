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