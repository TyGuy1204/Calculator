let operator;
let num1;
let num2;
let nums = [];
let result;

const op_buttons  = document.querySelectorAll(".op_button");
const num_buttons  = document.querySelectorAll(".num_button");
const eq_button = document.querySelector(".eq_button");
const display  = document.querySelector(".display");
const clear_button = document.querySelector(".clear_button");
const sign_button = document.querySelector(".sign_button");
const decimal_button = document.querySelector(".decimal_button");
const percent_button = document.querySelector(".percent_button");

op_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        operator  = button.textContent;
        console.log(operator);
    });
});
num_buttons.forEach((button) => {
    button.addEventListener("click", () => {
    display.textContent = parseInt(button.textContent);
        if(!Number.isInteger(nums[0]) && nums.length > 0){
            nums[0] = nums[0]+button.textContent;
            nums[0] = parseFloat(nums[0]);
            display.textContent = nums[0];
        }
        else if(nums.length < 2){
            nums.unshift(parseInt(button.textContent));
        }
        else{
           nums.pop();
           nums.unshift(parseInt(button.textContent));

        }
        console.log(nums);
    });
   
});


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
    return num1/num2;
}

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

eq_button.addEventListener("click",() =>{
    if(nums.length ==  2 && operator){
        result  = operate(nums[0],nums[1],operator)
        nums.pop();
        nums.unshift(parseInt(result));
        display.textContent = result;
    }
    else{
        result  = nums[0];
    }
    console.log(result)
});

clear_button.addEventListener("click", () =>{
    nums  = [];
    display.textContent = "";
})
sign_button.addEventListener("click", () =>{
        nums[0] = (nums[0] * -1);
        display.textContent = nums[0];
})
percent_button.addEventListener("click", () =>{
    nums[0] = nums[0] / 100;
    display.textContent = nums[0];
})
decimal_button.addEventListener("click", () =>{
    nums[0] = ((nums[0]).toFixed(0) + '.');
    display.textContent = nums[0];
})

