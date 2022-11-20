const make_album = ((artist,title,tracks)=>{
  const obj={
       Artist:artist,
       Title: title,
       Tracks:tracks
   }
   return obj
})
console.log(make_album("Taylor Swift"))
console.log(make_album("Taylor Swift","Midnights"))
console.log(make_album("Taylor Swift","Midnights",13))
