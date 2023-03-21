
 
 function netSalary(){
    let calc = parseInt(basic.value) + parseInt(benefits.value); 
    let nssf = 0.12
    let nhif = 0.02
    let paye = 0.12
    let all = nssf * paye * nhif

    final = calc - calc * all

    console.log(final)
    net.innerText = `Your net salary is ${final}`
 }