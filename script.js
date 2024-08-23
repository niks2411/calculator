
// window.addEventListener("load",bindEvents);
// let output;
// let buttons;


// function bindEvents(){
//     output=document.querySelector(".calculator-screen");
//     buttons=document.querySelectorAll(".number");
//     buttons.forEach((button)=>button.addEventListener("click",()=>takeInput(button)));

// }
// function takeInput(button){
//     console.log(button);
// }

let string = "";
let buttons = document.querySelectorAll('.number');

Array.from(buttons).forEach((button) => {
    
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('').value = string;
            console.log('button is clicked');
        }
        string += e.target.innerHTML;
        document.querySelector('input').value = string;
        

        
    });
});

let operators = document.querySelectorAll('.operator');
Array.from(operators).forEach((operator) => {
    operator.addEventListener('click', (e) => {
        string += e.target.value;
        document.querySelector('input').value = string;
    });
}); 

document.querySelector('.equal-sign').addEventListener('click', () => {
    try {
        string = eval(string);
        document.querySelector('input').value = string;
    } catch (error) {
        document.querySelector('input').value = "Error";
        string = "";
    }
});

// Adding functionality for the all-clear button
document.querySelector('.all-clear').addEventListener('click', () => {
    string = "";
    document.querySelector('input').value = string;
});