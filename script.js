let string = "";
let buttons = document.querySelectorAll('.buttonn');
let para;
// function addHTML(string){
//     para  = document.createElement("p");
//     para.innerHTML = string;
//     document.getElementById("input-cnt-cnt").appendChild(para);
// }
btnArr = Array.from(buttons);
btnArr.forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        // addHTML(string);
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
      para.remove();

    }
    else if(e.target.innerHTML == 'C'){
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
      }
    else{ 
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }
  })
})