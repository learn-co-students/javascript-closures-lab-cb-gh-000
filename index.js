function bumpCounter()
{
  var counter = 0;
  function addBump()
  {
    counter++;
  }

  function getBumps()
  {
    return counter;
  }

  return{
    addBump,
    getBumps
  }
}



function createAnimal(animalType)
{
  function ar(deadlyDevice)
  {
    var obj = {
      "animalType" : animalType,
      "deadlyDevice" : deadlyDevice
    }
    return obj
  }

  return ar;
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')

console.log(sharkWithFrickinCannon)
