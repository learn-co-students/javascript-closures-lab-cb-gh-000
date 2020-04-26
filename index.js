const app = "I don't do much."
function bumpCounter(){
  var counter = 0;

  function addBump(){
    return counter++;
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

  function outp(deadlyDevice){
    return{
      animalType,

      deadlyDevice
    };
  }

  return outp;


}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
