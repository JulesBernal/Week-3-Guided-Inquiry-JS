//Very Easy code 
const easyNum1=7;
const easyNum2=9;
console.log(`The difference between ${easyNum1} and ${easyNum2} is ${easyNum1 - easyNum2}`);

//Easy Code initalization
const personOne='Azathoth';
const personTwo='Amaris';



//hard functions
function add(hardNum1,hardNum2){
    return hardNum1+hardNum2;
}
function subtract(hardNum1,hardNum2){
    return hardNum1-hardNum2;
}
function multiply(hardNum1,hardNum2){
    return hardNum1*hardNum2;
}
function divide(hardNum1,hardNum2){
    return hardNum1/hardNum2;
}
console.log(`Function "add", 10 + 5 equals ${add(10,5)}
Function "subtract", 10 - 5 equals ${subtract(10,5)}
Function "multiply", 10 * 5 equals ${multiply(10,5)}
Function "divide", 10 / 5 equals ${divide(10,5)}`);

let calculation;
let choice;

while (choice!=`end`){
choice = prompt(`Welcome to Jules' Javasscript Guided Inquiry Coding Challenge. Select the difficulty challenge from 
1. Very Easy, 2. Easy, 3. Medium, 4. Hard, 5. Very Hard. or End to End Program.`);
    //First Selection, Very easy Code, print difference between two numbers.
    if (choice===`Very Easy.`|| choice=== `Very Easy` || choice===`1. Very Easy.` || choice===`1. Very Easy` || Number(choice)===1 || choice ===`1.` 
    || choice===`very easy.` || choice===`very easy`|| choice===`1. very easy` || choice===`1. very easy.`){
        alert(`The difference between ${easyNum1} and ${easyNum2} is ${easyNum1 - easyNum2}`);
    }
    //Second Selection, Easy Code, Print Difference between two names or strings.
    else if (choice===`Easy.`|| choice=== `Easy` || choice===`2. Easy.` || choice===`2. Easy` || Number(choice)===2 || choice ===`2.` 
    || choice===`easy.` || choice===`easy`|| choice===`2. easy` || choice===`2. easy.`){
        if( personOne.length>personTwo.length){
        alert(`The name ${personOne} is longer than ${personTwo} by ${personOne.length-personTwo.length}`);
    }
        else if (personTwo.length>personOne.length){
        alert(`The name ${personTwo} is longer than ${personOne} by ${personTwo.length-personOne.length}`);
    }
    }
    //Third Selection, Medium Code, Print whether string is all caps, all lower, or mixed.
    else if (choice===`Medium.`|| choice=== `Medium` || choice===`3. Medium.` || choice===`3. Medium` || Number(choice)===3 || choice ===`3.`
    || choice===`medium.` || choice===`medium`|| choice===`3. medium` || choice===`3. medium.`){
        const userVoice = prompt(`Please talk however you please.`);
        if (userVoice ===userVoice.toLowerCase()){
            alert(`You are whispering. 
"${userVoice}"`);
        }
        else if (userVoice===userVoice.toUpperCase()){
            alert(`You are screaming!
"${userVoice}"`);
        }
        else{
            alert(` You are speaking normally!
"${userVoice}"`);
        }
    }
    
//Hard Section of Code, Else if selection Leads to an alert of all the mathematical operation Functions.
else if (choice===`Hard.`|| choice===`4. Hard.` || choice===`4. Hard` || choice === `Hard` || Number(choice)===4 || choice ===`4.`
|| choice===`hard.` || choice===`hard`|| choice===`4. hard` || choice===`4. hard.`)
{
    alert(`Function "add", 10 + 5 equals ${add(10,5)}
Function "subtract", 10 - 5 equals ${subtract(10,5)}
Function "multiply", 10 * 5 equals ${multiply(10,5)}
Function "divide", 10 / 5 equals ${divide(10,5)}`);
}

//Very Hard Section of Code, Else if selection to lead to a while loop to loop Calculator
else if (choice===`Very Hard.`|| choice===`5. Very Hard.` || choice===`5. Very Hard` || choice=== `Very Hard` ||Number(choice)===5 || choice ===`5.`
|| choice===`very hard.`||choice===`very hard`||choice===`5. very hard.`||choice===`5. very hard`)
{

    
    while (true){
        const calcNum1 = prompt (`Welcome to Calculator, Enter a Number.`);
        const calcOperator = prompt (`Now enter your operation, such as: +, -, * or /`);
        const calcNum2 = prompt (`Now enter the last number.`);
        if (calcOperator===`+`){
            calculation=add(calcNum1,calcNum2);
            alert(`${calcNum1} ${calcOperator} ${calcNum2} = ${calculation}`);
            break;
        }
        else if (calcOperator=== `-`){
            calculation=subtract(calcNum1,calcNum2);
            alert(`${calcNum1} ${calcOperator} ${calcNum2} = ${calculation}`);
            break;
        }
        else if (calcOperator===`*`){
            calculation=multiply(calcNum1,calcNum2);
            alert(`${calcNum1} ${calcOperator} ${calcNum2} = ${calculation}`);
            break;
        }
        else if (calcOperator===`/`){
            calculation=divide(calcNum1,calcNum2);
            alert(`${calcNum1} ${calcOperator} ${calcNum2} = ${calculation}`);
            break;
        }
        else if (calcOperator===`end`||calcNum1===`end`||calcNum2===`end`){
            break;
        }
        else{
            alert (`Please enter a proper operation or number.`);
        }
    }
}
else if (choice===`end` ||choice===`end.`||choice===`End`||choice===`End.`){
break;
}
else {
    alert(`Please Enter a proper choice.`)
}
}