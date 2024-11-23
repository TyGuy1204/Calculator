// Variables to store caulcuation inputs and outputs
let operator;
let num1;
let num2;
let nums = [];
let result;
// Variables for each type of buttons
const op_buttons  = document.querySelectorAll(".op_button");
const num_buttons  = document.querySelectorAll(".num_button");
const eq_button = document.querySelector(".eq_button");
const display  = document.querySelector(".display");
const clear_button = document.querySelector(".clear_button");
const sign_button = document.querySelector(".sign_button");
const decimal_button = document.querySelector(".decimal_button");
const percent_button = document.querySelector(".percent_button");
// Set operator when corresponding button is clicked
op_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        operator  = button.textContent;
        console.log(operator);
    });
});
// Update variables when number button is pressed
num_buttons.forEach((button) => {
    button.addEventListener("click", () => {
    display.textContent = parseInt(button.textContent);
        if(nums.length < 2){
            nums.unshift(parseInt(button.textContent));
        }
        else{
           nums.pop();
           nums.unshift(parseInt(button.textContent));

        }
        console.log(nums);
    });
   
});

// Helper functions for operate()
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num2/num1;
}
// Main function for calculation logic
function operate(num1,num2,operator){
    if(operator == "+"){
        return add(num1,num2);
    }
    else if(operator == "-"){
        return subtract(num1,num2);
    }
    else if(operator == "/"){
        return divide(num1,num2);
    }
    else if(operator == "*"){
        return multiply(num1,num2);
    }
}
// Perform caluclation when equal button is pressed
eq_button.addEventListener("click",() =>{
    if(nums.length ==  2 && operator){
        result  = operate(nums[0],nums[1],operator)
        nums.pop();
        nums.unshift((result));
        if(Number.isInteger(result)){
            display.textContent = result;
        }
        else{
            display.textContent = result.toFixed(5);
        }
        
    }
    else{
        result  = nums[0];
    }
    console.log(result)
});
// Logic for AC button
clear_button.addEventListener("click", () =>{
    nums  = [];
    display.textContent = "";
})
// Logic for +- button
sign_button.addEventListener("click", () =>{
        nums[0] = (nums[0] * -1);
        display.textContent = nums[0];
})
// Logic for % button
percent_button.addEventListener("click", () =>{
    nums[0] = nums[0] / 100;
    display.textContent = nums[0];
})
// Logic for . button
decimal_button.addEventListener("click", () =>{
    nums[0] = parseFloat((nums[0]).toFixed(0) + '.');
    display.textContent = nums[0];
})

