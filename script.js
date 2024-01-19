
let inpbox = document.getElementById('inp');

let screen1 = document.getElementById('screen1')

let screen2 = document.getElementById('screen2')

//function divisiblity by 2
function divBy2(){
  if((Number.parseInt(inpbox.value))%2==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 2 = ${inp.value/2}`
  }
  else{
   
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 3
function divBy3(){
  if((Number.parseInt(inpbox.value))%3==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 3 = ${inp.value/3}`
  }
  else{

    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 4
function divBy4(){
  if((Number.parseInt(inpbox.value))%4==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 4 = ${inp.value/4}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 5
function divBy5(){
  if((Number.parseInt(inpbox.value))%5==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 5 = ${inp.value/5}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 6
function divBy6(){
  if((Number.parseInt(inpbox.value))%6==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 6 = ${inp.value/6}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 7
function divBy7(){
  if((Number.parseInt(inpbox.value))%7==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 7 = ${inp.value/7}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 8
function divBy8(){
  if((Number.parseInt(inpbox.value))%8==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 8 = ${inp.value/8}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 9
function divBy9(){
  if((Number.parseInt(inpbox.value))%9==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 9 = ${inp.value/9}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 10
function divBy10(){
  if((Number.parseInt(inpbox.value))%10==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 10 = ${inp.value/10}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
//function divisiblity by 11
function divBy11(){
  if((Number.parseInt(inpbox.value))%11==0){
    screen1.innerHTML= "YES"
    screen2.innerHTML = `${inp.value} ÷ 11 = ${inp.value/11}`
  }
  else{
    screen1.innerHTML= "NO"
    screen2.innerHTML = ""
  }
}
    
   //calcbtn.addEventListener('click', obtainBox());
    
    function clearbtn(){
      window.location.reload();
      
    }
    


    