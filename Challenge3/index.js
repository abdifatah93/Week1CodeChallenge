let pay,nhif,nssf;
let totalTax ;
let grossSalary=300000 // based on grossSalary
let netSalary ;



    if(grossSalary<=24000){ //your pay can be calaculated based on grossSalary
        pay = grossSalary*0.10
    }else if (grossSalary>=24001 && grossSalary<=32333){
        pay = grossSalary*0.25
    }else if (grossSalary>=32334 && grossSalary<=500000){
        pay = grossSalary*0.30
    }else if (grossSalary>=500001 && grossSalary<=800000){
        pay = grossSalary*0.325
    }else if (grossSalary>800000){
        pay = grossSalary*0.35
    }

    

    if (grossSalary<=5999){ //based on your grossSalary your nhif ddeduction can calculated
        nhif =  150
    }else if (grossSalary>=6000 && grossSalary<=7999){
        nhif = 300
    }else if (grossSalary>=8000 && grossSalary<=11999){
        nhif = 400
    }else if (grossSalary>=12000 && grossSalary<=14999){
        nhif = 500
    }else if (grossSalary>=15000 && grossSalary<=19999){
        nhif = 600
    }else if (grossSalary>=20000 && grossSalary<=24999){
        nhif = 750
    }else if (grossSalary>=25000 && grossSalary<=29999){
        nhif = 850
    }else if (grossSalary>=30000 && grossSalary<=34999){
        nhif = 900
    }else if (grossSalary>=35000 && grossSalary<=39999){
        nhif = 950
    }else if (grossSalary>=40000 && grossSalary<=44999){
        nhif = 1000
    }else if (grossSalary>=45000 && grossSalary<=49999){
        nhif =1100
    }else if (grossSalary>=50000 && grossSalary<=59999){
        nhif = 1200
    }else if (grossSalary>=60000 && grossSalary<=69999){
        nhif = 1300
    }else if (grossSalary>=70000 && grossSalary<=79999){
        nhif = 1400
    }else if (grossSalary>=80000 && grossSalary<=89999){
        nhif = grossSalary-1500
    }else if (grossSalary>=90000 && grossSalary<=99999){
        nhif = 1600
    }else if (grossSalary>=100000){
        nhif = 1700
    }
    


  ;

nssf=grossSalary*0.06 // lastely your nssf is also calculated based on grossSalary




totalTax=pay+nssf+nhif // totaltax is calculated by adding the pay,nssf,nhif
console.log(totalTax) // it will generate your totaltax

netSalary=grossSalary-totalTax //netsalary is given by grossSalary-totaltax
console.log(netSalary)//it will generate your net salary