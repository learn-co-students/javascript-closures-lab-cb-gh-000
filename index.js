const app = "I don't do much."
function bumpCounter(){
  var counter = 0;
  function addBump(){
    counter++
  }
  function getBumps(){
    return counter;
  }
  return { addBump,
    getBumps
  }
}

function createAnimal(animalType){
  function create(deadlyDevice){
    return { animalType: animalType, deadlyDevice:deadlyDevice }
  }
  return create
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinCannon = sharkCreator('Cannon')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
