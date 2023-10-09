let speed;// the speed value can be reassigned anytime 
let demerit;
function speedCalculator(speed){
  if (speed <= 70){
    return 'OK';// if condition is met it'll priont out OK
  }
  else if (speed > 70){
    demerit = ((speed - 70)/5);// each increment by 5 above 70 will increase the points by 1
  }
  if (demerit > 12) {
    return 'License Suspended';// demerit value above 12 suspends license
  }
  return `points:${demerit}`;// prints out whatever points calculated
}
console.log(speedCalculator(60))