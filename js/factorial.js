
function factorial(number){
    let fac = 1;
    while(number > 0){
        fac*=number;
        number--;
    }
    return fac
}
let result = factorial(5);
console.log(result);