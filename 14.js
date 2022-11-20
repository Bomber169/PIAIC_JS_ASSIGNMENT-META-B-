const names = ["Sami", "Mahmood", "Ghous", "Sarim"];
let names_length = names.length;

let text = "";
for (let i = 0; i < names_length; i++) {
  text += "\n" + names[i] + " i would like to invite to dinner.";
 
}
console.log(text);
