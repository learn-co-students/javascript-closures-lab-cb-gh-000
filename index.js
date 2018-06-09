// Three-point turn
const bumpCounter = () => {
  let counter  = 0;
  let addBump  = () => counter += 1;
  let getBumps = () => counter;
  return {addBump, getBumps};
}
// Blood in the water
const createAnimal = (animalType) => (deadlyDevice) => ({animalType, deadlyDevice});
let sharkCreator = createAnimal('Shark'), sharkWithFrickinLaserbeam = sharkCreator('Laserbeam'), sharkWithFrickinCannon = sharkCreator('Cannon');
