let operator;
let num1;
let num2;
let nums = [];
let result;

const op_buttons  = document.querySelectorAll(".op_button");
const num_buttons  = document.querySelectorAll(".num_button");
const eq_button = document.querySelector(".eq_button");
const display  = document.querySelector(".display");

op_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        operator  = button.textContent;
        console.log(operator);
    });
});
num_buttons.forEach((button) => {
    button.addEventListener("click", () => {
    display.textContent = parseInt(button.textContent);
        if(nums.length < 2){
            nums.push(parseInt(button.textContent));
        }
        else{
            nums.pop();
            nums.push(parseInt(button.textContent));
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
        add(num1,num2);
    }
    else if(operator == "-"){
        subtract(num1,num2);
    }
    else if(operator == "/"){
        divide(num1,num2);
    }
    else if(operator == "*"){
        multiply(num1,num2);
    }
}

eq_button.addEventListener("click",() =>{
    if(nums.length ==  2 && operator){
        if(operator === "+"){
            result  = nums[0] + nums[1];
        }
        else if(operator === "-"){
            result  = nums[1] - nums[0];
        }
        else if(operator === "*"){
            result  = nums[1] * nums[0];
        }
        else if(operator === "/"){
            result  = nums[1] / nums[0];
        }
    nums.pop();
    nums.push(result);
    display.textContent = result;
    }
    else{
        result  = nums[0];
    }
    console.log(result)
});

