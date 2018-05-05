const app = "I don't do much.";

function bumpCounter(){
  var count = 0;
  let addBump = () => (count += 1);
  let getBumps = () => (count);

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType){
  return (deadlyDevice) => ({ animalType, deadlyDevice });
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
