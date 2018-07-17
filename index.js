const app = "I don't do much."
function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter += 1;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  };
 }


 const {addBump, getBumps} = bumpCounter();

 function createAnimal(animal) {

   return (deadlyDevice)=> {
    return {animalType: animalType, deadlyDevice: deadlyDevice}
}

sharkCreator = createAnimal('Shark')
sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
sharkWithFrickinCannon = sharkCreator('Cannon')
