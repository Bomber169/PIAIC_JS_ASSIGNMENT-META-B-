let places = ["Makkah", "Madina","Turkey","Japan","USA"]
console.log(places)
console.log("\nPrinting Array in Alphabetic order \n")
const visit = [...places].sort() 
console.log(visit)
console.log("\nThe array is in it's original order \n")
console.log(places)

console.log("\nPrinting Array in reverse order \n")

const visit1 = [...visit].reverse()
console.log(visit1) 
console.log("\nThe array is in it's original order \n")
console.log(places)

console.log("\nReverse the order of list\n")
places.sort()
console.log(places.reverse())
console.log("\nThe array is back to it's original order \n")
console.log(places.reverse())
console.log("\nPrinting Array in Alphabetic order \n")
console.log(places.sort())
console.log("\nPrinting Array in reverse Alphabetic order \n")
console.log(places.reverse())
