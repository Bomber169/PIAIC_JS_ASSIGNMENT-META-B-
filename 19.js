let guest = ["Sami", "Mahmood", "Ghous", "Areeb"];
for(let i=0;i<guest.length;i++){
console.log( guest[i] + " ,You are invted for dinner ")
}
console.log("\n"+guest[2]+" Said, Sorry I am busy\n")

console.log("Changing List" + "\n")

//splice method for changing content of an array at position 2 change or add 1 content 
guest.splice(2,1,"Sarim") 

for(let i =0; i<guest.length;i++){
    console.log( guest[i] + " ,You are invted for dinner ")
}

console.log("\n" + "Hurray! I found a new big table so i have more space thats why i am inviting new people"+ "\n")

guest.unshift("Musab");
guest.splice(2,0,"Moazzam")
guest.push("Rafay")

for(let i =0; i<guest.length;i++){
    console.log( guest[i] + " ,You are invted for dinner ")
}



console.log("\nI am extremely sorry to inform you that the reservation for large guest table"+ 
" is cancelled now I can invite only two peoples\n ")

for (let i=guest.length-1;i>1;i--) {
    console.log("Sorry I can’t invite you to dinner "+guest[i] )
    guest.pop()
}

for (let i of guest) {
    console.log("You are still invted "+ i)
}