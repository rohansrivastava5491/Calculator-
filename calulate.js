
function display(value){
    document.getElementById("output").value += value;
}
function clearScreen(){
    document.getElementById("output").innerHTML = "";
}
function calculate(){
    var p = document.getElementById("output").value;
    var q = eval(p);
    document.getElementById("output").value = q; 
}