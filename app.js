function primeNum(){
    var firstNum = parseInt(document.getElementById("num1").value);
    var secondNum = parseInt(document.getElementById("num2").value);

    // check if the numbers fit criteria
    if (firstNum <= 2 || firstNum >= 100 || secondNum <= 2 || secondNum >= 100){
        document.getElementById("msg").innerHTML = "Invalid input, please try again.";
    }
    else if (firstNum >= 2 && firstNum <= 100 && secondNum >= 2 && secondNum <= 100){
        calculatePrimeNum(firstNum,secondNum);
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
function calculatePrimeNum(numOne,numTwo){
    //alert("calculating");
    var pNumArray = [];
    var sNum = 0;
    var bNum = 0;


    if (numOne > numTwo){
        sNum = numTwo;
        bNum = numOne;
    }
    else if (numOne < numTwo){
        sNum = numOne;
        bNum = numTwo;
    }

    console.log(sNum);
    console.log(bNum);

    while(sNum <= bNum){
        console.log("in while");

        console.log(isPrime(3));
        if(isPrime(sNum) == true){
            console.log(sNum);
            pNumArray.push(sNum);
            sNum = sNum + 1;
        }
        else if (isPrime(sNum) == false){
            console.log(sNum);
            sNum = sNum + 1;
        }
    }
    console.log(pNumArray);
    document.getElementById("primeNumber").innerHTML = "There are " + pNumArray.length +" prime numbers.";
    document.getElementById("msg").innerHTML = pNumArray;
}