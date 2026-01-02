// console.log("Hello")
// console.warn("Hello")
// console.error("Hello")
// alert("Hello")
// document.writeln("Hello")

const pi = 3.14
console.log(typeof (pi))
console.log(pi)

var myName = "Andrew"
let profession = "Student"

let flag1 = true
let flag2 = false

console.log(flag1 || flag2)
console.log(flag1 && flag2)
console.log(!flag1)

console.log(flag1 == flag2)
console.log(flag1 === 1)

let x = 10
let y = 20

if (x > y) {
    console.log(`${x} is greater than ${y}`)
}
else if (x < y) {
    console.log(`${y} is greater than ${x}`)
}
else {
    console.log(`${x} is equal to ${y}`)
}

let time = new Date().getHours()

console.log(time)

if (time < 12) {
    console.log("Good Morning")
}
else if (time < 18) {
    console.log("Good Afternoon")
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        sum += i
}
console.log(`The sum is ${sum}`)

let student = {
    name: "Andrew",
    age: 21,
    profession: "Student"
}

console.log(student)
console.log(student.name)
console.log(student['age'])

let season = ['summer', 'winter', 'monsson', 'autumn', 'spring']
console.log(season)
console.log(season[1])
console.log(season.length)

for (let i = 0; i < season.length; i++) {
    console.log(season[i])
}

function Sum(val) {
    let sum = 0;
    for (let i = 1; i <= val; i++) {
        if (i % 2 == 0)
            sum += i
    }
    return sum
}
console.log(Sum(30))

function canVote(age) {
    return age >= 18
}
console.log("Can vote:" + canVote(17))

const employee = [
    {name:"Jake", age:28},
    {name:"Ali", age:25},
    {name:"Helen", age:23}
]

const display=(val)=>{
    console.log(val.name)
}  
employee.forEach(display)

let numbers=[10,20,30,40,50]

numbers.forEach(displayPlus5)
function displayPlus5(val){
    console.log(val+5)
}

const add=(a,b) => a+b
console.log(add(5,10))

const sumOfEven=(n)=>{
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0)
            sum += i
    }
    return sum
}
console.log(sumOfEven(20))

const intro = document.querySelector(".intro")

document.getElementById("demo").innerHTML= 'The first paragraph is: ' + intro.innerHTML

function displayDate(){
    document.getElementById("demo").innerHTML=Date()
}