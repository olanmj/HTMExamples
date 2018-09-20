let f = function() {
   // alert('You Clicked!');
    let btn = document.querySelector("#btn");
    let firstName = 'Jane';
let lastName = 'Doe';
let monthlyIncome = 6000;
let result = `My name is ${firstName} ${lastName}        
     and I earn $${monthlyIncome} per month`;

    btn.textContent = result; 
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';              
}
window.onload = function() {
document.querySelector("#btn").onclick = f;
}
