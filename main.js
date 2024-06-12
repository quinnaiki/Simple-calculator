function displayInput(value){
    document.getElementById("display").value += value;
}
function calculate() {
    display.value = eval(display.value);
  }
function clear(){
  document.getElementById('display').value ="";
}