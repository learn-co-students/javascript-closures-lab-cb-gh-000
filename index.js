const app = "I don't do much."

function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {addBump,
          getBumps};
}

function createAnimal(animalType) {
  function weapon(deadlyDevice) {
    var obj = new Object();
    obj.animalType = animalType;
    obj.deadlyDevice = deadlyDevice;
    return obj;
  }

  return weapon;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam  = sharkCreator('Laserbeam');
var sharkWithFrickinCannon  = sharkCreator('Cannon');
