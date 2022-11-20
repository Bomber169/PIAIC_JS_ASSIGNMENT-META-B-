let car = 'subaru';
let data = ['subaru','subaru','subaru','subaru','subaru','ford','mercedes','nissan','range rover','corolla'];
console.log("Is car == 'subaru'? I predict True.")
var i= 0;
data.forEach((item)=>{
    console.log(item == 'subaru')
    i++;
})
