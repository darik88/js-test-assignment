"use strict"


// Задание 3-4
find_button.onclick = function () {
    let searchFieldValue = document.getElementById("search_field").value;
    if (!searchFieldValue) {
        alert("Empty input");
    } else if (searchFieldValue.trim().toLowerCase() === "google") {
        alert("Yandex круче. Но это не точно")
    } else {
        alert(searchFieldValue);
    }
    document.getElementById("search_form").reset();
    showFirstObjectName();
}


// Задание 5
function showFirstObjectName() {
    let objects = []

    let obj1 = {
        name: "John",
        age: 30
    }

    let obj2 = {
        name: "Michael",
        age: 16
    }

    let obj3 = {
        name: "Alex",
        age: 90
    }

    objects.push(obj1, obj2, obj3)
    alert(`Name in the 1st object is ${objects[0].name}`);
}


// Задание 6
function superSum(a, b) {
    a = +prompt("Enter the first number:");
    b = +prompt("Enter the second number:");

    if (typeof(a + b) === "number" && !Number.isNaN(a + b)) {
        alert(`The sum of ${a} and ${b} is ${a + b}`);
    } else {
        alert("Not a number");
    }
}


// Задание 7
function createArray(numberOfElements) {
    let array = [];
    for(let i = 0; i < numberOfElements; i++) {
        array.push(Math.round(Math.random() * 101));
    }
    return(array);
}

function findMinAndMaxInArray(array) {
    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array.length-1-i; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(`Minimum in array is ${array[0]}`);
    console.log(`Maximum in array is ${array[array.length-1]}`);
}
let array = createArray(5);
console.log(array);
findMinAndMaxInArray(array);


// Задание 8
let a = "String A";
let b = "String B";

let temp = a;

a = b;
b = temp;

console.log(a);
console.log(b);


// Задание 9
function findMaxInArray(array) {
    let max = array[0];

    for(let value of array) {
        if(value > max) {
            max = value;
        }
    }
    console.log(`Maximum in array is ${max}`);
}

let newArray = createArray(10);
console.log(newArray);
findMaxInArray(newArray);


/*
* Задание 10. Расскомментить блок кода ниже и закомментить блок "Задание 3-4".
* */

// find_button.onclick = setTimeout(function () {
//     let searchFieldValue = document.getElementById("search_field").value;
//     if (!searchFieldValue) {
//         alert("Empty input");
//     } else if (searchFieldValue.trim().toLowerCase() === "google") {
//         alert("Yandex круче. Но это не точно")
//     } else {
//         alert(searchFieldValue);
//     }
//     document.getElementById("search_form").reset();
// }, 3000);