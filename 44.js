
const sandwich =(...args)=>{

  for(let i=0; i<args.length; i++){
      if(i == args.length-1){
          console.log(` ${args[i]}\nThe sandwitch should have all these items`)
      }
      else{
          console.log(` ${args[i]}`)
      }
  }
}
let order = "The sandwitch includes "
console.log(order)
sandwich("Potato","Fish","Chicken")
