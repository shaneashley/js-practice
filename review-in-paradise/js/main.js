// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
 let favFood = "Seafood Pasta"
 favFood = "Spaghetti Bolognese"
 alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let country = "England"
alert(country.charAt(1))


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeNums(num1, num2, num3){
    let product = (num1 / num2) * num3
    alert(product)
}

threeNums(5,20,10)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum(firstNum){
    console.log(firstNum.crbt)
}

oneNum(25)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function isItSummer(month){
    let monthLowerCase = month.toLowerCase()
    if ( monthLowerCase === 'june' ||  monthLowerCase === 'july' ||  monthLowerCase === 'august'){
        alert("YAY")
    } else {
        alert("Boo")
    }
}




//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.


function skip5s(n) {
    for(let i = 1 ; i <= n ; i++){
        if(i % 5 !== 0){
            console.log(i)
        }
    }
}




 let  arrNums = [1,3,6,8,11,2,5]

function checkFirstAndLast(arrNums) {
 if( arrNums[0] < arrNums[arrNums.length-1]){
alert("Hi")
 } else if ( arrNums[0] > arrNums[arrNums.length-1]){
    alert('Bye')
 } else {
    alert("We close in an hour")
 }
}
