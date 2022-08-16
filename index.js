// Code your solution in this file!
function distanceFromHqInBlocks(dis){
   if( dis > 42){
    return dis - 42;
   }
   else {
    return 42 - dis;
   }
}

function distanceFromHqInFeet(dis){
    return distanceFromHqInBlocks(dis) * 264;
}

function distanceTravelledInFeet(dis1, dis2){
    if(dis2 > dis1){
        return (dis2 - dis1) * 264;
    }
    else{
        return (dis1 - dis2) * 264;
    }
}

function calculatesFarePrice(dis1, dis2){
    const distance = distanceTravelledInFeet(dis1, dis2);
    if (distance <= 400){
        return 0;
    }
    else if (distance>400 && distance<=2000){
        return (distance-400) * .02;
    }
    else if (distance>2000 && distance<2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}