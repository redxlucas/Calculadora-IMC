function IMC(){
    document.getElementById("result").innerHTML += " ";
    document.getElementById("weight").style.borderColor="#ffffff";
    document.getElementById("weight").style.backgroundColor="#ffffff";
    document.getElementById("height").style.borderColor="#ffffff";
    document.getElementById("height").style.backgroundColor="#ffffff";
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
    var result = weight/(height**2);
    console.log(result.toFixed(2));
    document.getElementById("result").innerHTML = " " + result;
    return true;
}