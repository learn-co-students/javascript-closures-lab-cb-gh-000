const bumpCounter = () => {
  let counter = 0;;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps,
  };
};

const createAnimal = (animalType) => {
  const createAnimal = (deadlyDevice) => ({ animalType, deadlyDevice });
  return createAnimal;
};

const sharkCreator = createAnimal('Shark');
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
const sharkWithFrickinCannon = sharkCreator('Cannon');
