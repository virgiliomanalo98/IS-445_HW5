function primeNum(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // check if the numbers fit criteria
    if (num1 <= 2 || num1 >= 100 || num2 <= 2 || num2 >= 100){
        document.getElementById("msg").innerHTML = "Invalid input, please try again.";
    }
    else if (num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100){
        calculatePrimeNum(num1,num2);
        //document.getElementById("msg").innerHTML = "";
    }
}
function isPrime(num){
    var res = true;
    for (var i=2; i<=Math.ceil(num/2); i++){
        if((num%i)==0){
            res = false;
            break;
        }
    }
    return res;
}