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

