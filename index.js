
const bumpCounter = () =>{
  let counter = 0;
  const addBump = () => counter++
  const getBumps = () => counter

  return {addBump,getBumps}
}
const createAnimal = (animalType) =>(deadlyDevice) => ({ animalType, deadlyDevice})

let sharkCreator = createAnimal('Shark');
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinCannon = sharkCreator('Cannon');
