function IMC(){
    document.getElementById("result").innerHTML += " ";
    document.getElementById("weight").style.borderColor="#917FB3";
    document.getElementById("weight").style.backgroundColor="#474d70";
    document.getElementById("height").style.borderColor="#917FB3";
    document.getElementById("height").style.backgroundColor="#474d70";
    if(document.getElementById("weight").value == "" || document.getElementById("weight").value <= "0"){
        document.getElementById("weight").style.borderColor="red";
        document.getElementById("weight").style.backgroundColor="pink";
        document.getElementById("weight").focus();
        return false;
    }
    if(document.getElementById("height").value == "" || document.getElementById("height").value <= "0"){
        document.getElementById("height").style.borderColor="red";
        document.getElementById("height").style.backgroundColor="pink";
        document.getElementById("height").focus();
        return false;
    }
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var result = weight/(height*height);
    var rank
    result = result.toFixed(2);
    if(result < 18.5){
        rank = "Abaixo do peso";
    }
    else if(result >= 18.5 && result < 25){
        rank = "Peso ideal"
    }
    else if(result >= 25 && result < 30){
        rank = "Acima do peso"
    }
    else if(result >= 30 && result < 35){
        rank = "Obesidade grau I"
    }
    else if(result >= 35 && result < 40){
        rank = "Obesidade grau II"
    }
    else{
        rank = "Obesidade grau III"
    }
    document.getElementById("result").innerHTML = " " + result;
    document.getElementById("rank").innerHTML = " " + rank;
    return true;
}