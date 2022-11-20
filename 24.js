if("Faiz" === "Faiz")
console.log(true)
else 
console.log(false)

const name = "Faiz"
if(name.toLowerCase() == "faiz"){
    console.log("Name is in lower case")
}else{
    console.log("Not in lower case")
}

let a =5
let b = 4

if(a == 5){
    console.log(true)
}else if(a!= 5) {
    console.log(false)
}

if(a>=5){
    console.log("a is equal or greater than 5")
}else if(a<5){
    console.log("a is not greater than 5")
}

if(a==5 && b==6){
    console.log("correct")
}else if (a==5 || b ==3){
    console.log(true)
}

const arr = [1,2,3,4]
let  num = 1
let num1 = 5 

for (const find of arr) {
    if(find == 2){
        console.log("found")
        num = true
        
    }
}
if(num != true){
    console.log("Not found")
}

if(arr.includes(num)){
    console.log("Number is in Array")
}

else if(arr.includes(num1)){
    console.log("Number is in Array")
}




