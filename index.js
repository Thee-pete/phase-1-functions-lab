// Code your solution in this file!
let distance;
let pickup = 42;
let blocks;
let feet;
let travelled;
let destination;
let drop;
let distanceToCharge;
let fare;
function distanceFromHqInBlocks(distance){
    if (pickup > distance){
        blocks = pickup -distance; 
    }else {
    blocks = distance - pickup;
    }
    return blocks;
}
function distanceFromHqInFeet(distance){
   feet = distanceFromHqInBlocks(distance)*264;
   return feet;
}
function distanceTravelledInFeet(drop, destination){
    if(destination > drop){
        travelled = (destination -drop)*264;
    }else{
        travelled = (drop-destination) * 264;
    }
    return travelled;
}
function calculatesFarePrice(start, destination){

    if(destination > start){
    distanceToCharge = (destination - start)*264;
    }else{
        distanceToCharge =(start -destination)*264;
    }
   
    if(distanceToCharge <= 400){
        fare = 0; 
    }
    else if (distanceToCharge >= 400 && distanceToCharge <= 2000){
        fare = (distanceToCharge - 400)*0.02;
        
    }
   
    
    else if(distanceToCharge > 2000 && distanceToCharge <= 2500){
        fare =25;
    }
    else if (distanceToCharge>2500){
        fare = 'cannot travel that far';
    }
    return fare;
}


