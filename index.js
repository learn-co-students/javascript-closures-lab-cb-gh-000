function bumpCounter() {
    const counter;
    
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