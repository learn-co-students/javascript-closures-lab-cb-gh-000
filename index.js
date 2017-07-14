const app = "I don't do much."

function bumpCounter() {
  var cnt = 0;

  function addBump() {
    cnt++;
  }

  function getBumps() {
    return cnt;
  }

  return {addBump, getBumps};
}

function createAnimal(aType) {
  function createDeadly(deadD){
    return {
      animalType: aType,
      deadlyDevice: deadD,
    }
  }
  return createDeadly;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
