
function payee(){
    let calc = parseInt(basic.value) + parseInt(benefits.value); 
    if(calc <= 24000){
        value = calc*0.1;
    }else if (calc > 24000 && calc<=32333){
        value = 24000*0.1 + (calc-24000)*0.25;
    }else if(calc > 32333){
        value = 24000*0.1 + (calc-24000)*0.25 + (calc - 32333)*0.3;
    }

    console.log(value);
    net.innerText = `Your tax is ${value}`
}

function nssf(){
    let calc = parseInt(basic.value) + parseInt(benefits.value);
    if(calc <= 8000){
        withnssf = calc*0.05
    }else if(calc > 8000){
        withnssf = 400
    }

    console.log(withnssf);
    
}

function nhif(){
    let calc = parseInt(basic.value) + parseInt(benefits.value);
    if(calc <= 5999){
        withnhif = 150
    }else if(calc >=6000 && calc<= 7999){
        withnhif = 300
    }else if(calc >=6000 && calc<= 7999){
        withnhif = 300
    }else if(calc >=8000 && calc<= 11999){
        withnhif = 400
    }else if(calc >=12000 && calc<= 14999){
        withnhif = 500
    }else if(calc >=15000 && calc<= 19999){
        withnhif = 600
    }else if(calc >=20000 && calc<= 24999){
        withnhif = 750
    }else if(calc >=25000 && calc<= 29999){
        withnhif = 850
    }else if(calc >=30000 && calc<= 34999){
        withnhif = 900
    }else if(calc >=35000 && calc<= 39999){
        withnhif = 950
    }else if(calc >=40000 && calc<= 44999){
        withnhif = 1000
    }else if(calc >=45000 && calc<= 49999){
        withnhif = 1100
    }else if(calc >=50000 && calc<= 59999){
        withnhif = 1200
    }else if(calc >=60000 && calc<= 69999){
        withnhif = 1300
    }else if(calc >=70000 && calc<= 79999){
        withnhif = 1400
    }else if(calc >=80000 && calc<= 89999){
        withnhif = 1500
    }else if(calc >=90000 && calc<= 99999){
        withnhif = 1600
    }else{
        withnhif = 1700
    }
    
    console.log(withnhif);
}

function netSalary(){
    let calc = parseInt(basic.value) + parseInt(benefits.value);
    let payee = payee(value);
    let nssf = nssf(withnssf);
    let nhif  = nhif(withnhif);

    let net = calc - (payee + nhif + nssf)

    console.log(net);
    net.innerText = `${net}`
} 