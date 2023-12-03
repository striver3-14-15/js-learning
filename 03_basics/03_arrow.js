const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`Hello ${this.username} , welcome to website`);
        console.log(this);  //this returns entire json 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //it gives blank `{}`

function chai(){
    let username = "siuuu"
    console.log(this.username); //output : undefined
    // console.log(this)
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()