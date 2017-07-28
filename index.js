function bumpCounter() {
    var counter = 0;
    
    function addBump(){
        counter = counter + 1;
    }
    
    function getBumps() {
        return counter;
    }
    
    return {
        addBump,
        getBumps
    }
}


function createAnimal(animalType) {
    
    function deadlyFunction(deadlyDevice){
        return {
            animalType,
            deadlyDevice
        }
    }
    return deadlyFunction;
}

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');