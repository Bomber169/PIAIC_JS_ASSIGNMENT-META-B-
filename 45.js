function cars(name, man, ...args) {
  const obj = {
      Name: name,
      Manufacturer: man,
  }
  args.forEach((v, i) => {obj[Object.keys(v)[0]] = Object.values(v)[0]})
  return obj
}

const car_obj = cars("Civic", "Honda", {Color: "red"}, {Seats: "4 Seats"},);
console.log(car_obj);
