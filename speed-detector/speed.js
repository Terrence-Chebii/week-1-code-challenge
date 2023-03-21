//conditions
function Convert(){
    let pace = parseInt(speed.value);
    if(pace < 0){
        score = "The car is in reverse"
    }else if(pace <= 0){
        score = "Car is not moving"
    }else if(pace <= 70){
        score = "OK"
    }else if(pace <= 75){
        score = "-1 merit point";
    }else if(pace <= 80){
        score = "-2 merit points";
    }else if(pace <= 85){
        score = "-3 merit points";
    }else if(pace <= 90){
        score = "-4 merit points";
    }else if(pace <= 95){
        score = "-5 merit points";
    }else if(pace <= 100){
        score = "-6 merit points";
    }else if(pace <= 105){
        score = "-7 merit points";
    }else if(pace <= 110){
        score = "-8 merit points";
    }else if(pace <= 115){
        score = "-9 merit points";
    }else if(pace <= 120){
        score = "-10 merit points";
    }else if(pace <= 125){
        score = "-11 merit points";
    }else if(pace > 125){
        score = "License Suspended";
    }else{
        score = "Please fill out correctly";
    }
    //what to return
    console.log(score)
    resultSpeed.innerText = `${score}`;
}
