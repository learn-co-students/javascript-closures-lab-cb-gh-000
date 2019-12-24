const app = "I don't do much."
function createAnimal(animalType){
  const something = (deadlyDevice) =>{
    return Object.assign({},{["animalType"]: animalType,["deadlyDevice"]: deadlyDevice})
  }
  return something
}

function bumpCounter(){
  var counter=0
  function addBump(){
    counter+=1
  }
  function getBumps(){
    return counter
  }
return {
  addBump,
  getBumps
};
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
