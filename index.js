
function bumpCounter() {
  var counter= 0 ;

  function addBump(){
    return counter += 1;
  }
  function getBumps(){
    return counter;
  }
  return {
    addBump,
    getBumps
  };
}
function createAnimal(animalType){
  return function makeDevice(deadlyDevice) {
      return { animalType, deadlyDevice };
    }
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
