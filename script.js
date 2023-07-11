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
    result = (result.toFixed(2));
    document.getElementById("result").innerHTML = " " + result;
    return true;
}