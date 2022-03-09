const body = document.querySelector("#one")
const city = document.querySelector("#city");
const btnn = document.querySelector("#submit")
let deg = document.querySelector(".temps-degree")
let desc = document.querySelector(".temps-description")
let na = document.querySelector(".name")
btnn.addEventListener('click', function () {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=c1940dae5335652f4e8c1a2283c3722d`

  fetch(api)
    .then(response => response.json())
    .then(data => {
      const degg = data['main']['temp'];
      const dessc = data['weather'][0]['description'];
      const naa = data['name']

      console.log(data);

      deg.innerText = Math.round(degg - 273.15)
      desc.innerText = dessc
      na.innerText = naa
    })
})

var today = new Date();
const currenttime = today.getHours()
// const currenttime=18
if (currenttime >= 6 && currenttime < 18) {
  console.log('Morning')
  body.style.backgroundImage = "url('./Images/morning-img.jpg')";
  // body.style.backgroundSize = "30px";
  // body.style.backgroundColor = "#e3bb88";
  body.style.backgroundSize = "cover";

} else if (currenttime >= 18 && currenttime <= 19) {
  console.log("eve")
  body.style.backgroundImage = "url('./Images/evening-img.jpg')";
  body.style.backgroundPosition = "center";
  body.style.backgroundSize = "200px 100px";
  // body.style.backgroundColor = "#d89864";
  body.style.backgroundSize = "cover";
} else {
  console.log("night")
  body.style.backgroundImage = "url('./Images/night2-img.jpg')";
  body.style.backgroundPosition = "center";
  body.style.backgroundSize = "200px 100px";
  // body.style.backgroundColor = "#644749";
  body.style.backgroundSize = "cover";

}
