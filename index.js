// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
   if (pickUpLocation > 42) {
    return pickUpLocation - 42;
   } else {
    return 42 - pickUpLocation;
   }
}
   
function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}
   
function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock <= endBlock) {
        return (endBlock - startBlock) * 264;
    } else {
        return (startBlock - endBlock) * 264;
    } 
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet < 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else if (distanceInFeet > 2500) {
        return "cannot travel that far";
    }  
}

