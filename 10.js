const name = "faiz ahmed";

function titleCase(str) {
  //toLowerCase() converts whole string into lower case
  str = str.toLowerCase(); 
  //split the whole string into array where spaces.
  str = str.split(" "); 

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  //return the output by joining the array of strings in to a single string
  return str.join(" ");
}

console.log("Lower Case", name.toLowerCase());
console.log("Upper Case", name.toUpperCase());
console.log("Title Case", titleCase(name));