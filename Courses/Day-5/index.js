// this is weather station
const weather = new Promise((resolve, reject) => {
  resolve("78 deg");
});

console.log("asdfasfdsffasffdsaf");
//  call to weather station

weather.then((data) => {
  console.log(data);
});
