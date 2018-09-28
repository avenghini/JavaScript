// *//const userName = prompt('Enter your name');
// const greetings = 'Hello ' + userName;
// alert(greetings);

// const userAge = parseInt(prompt('Enter your age'));
// const nextAge = userAge + 1;
// alert('Next year you will be ' + nextAge);
// const monthNum = parseInt(prompt('Enter month number'));
// const monthNumDivided = monthNum / 2;
// alert(monthNumDivided);

// const userAge = parseInt(prompt('Enter your age'));
// if (userAge >= 18) { // < > <= >= == === != !==
//     alert('You are adult'); 
// } else {
//     // If false
//     alert('You are child');
// }
function addOne(num) {
    const newNum = num + 1;
    return newNum;
}

let result = addOne(10);
alert(result);
result = addOne(result);
alert(result);