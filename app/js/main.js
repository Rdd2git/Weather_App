// const axios = require("axios");
let search = document.getElementById("set");
let currentCity = document.getElementById("root");
search.addEventListener("submit", function (event) {
  let inputText = event.target.querySelector(".header__search-input").value;
  currentCity.textContent = inputText;
  event.target.querySelector(".header__search-input").value = "";
  event.preventDefault();
});

let myClicker = function (e) {
  // async function getUser(city) {
  //   try {
  //     const response = await axios({
  //       method: "get",
  //       url: "https://api.openweathermap.org/data/2.5/weather?",
  //       params: {
  //         APPID: "b9d6c3b529a4bdfda5ee9a6a843399af",
  //         units: "metric",
  //         lang: "ru",
  //         q: `${city}`,
  //       },
  //     });
  //     console.log(response.data);
  //     return (data = response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  console.log("sdgdsged");
  alert(this.e.value);
};

//console.log(myClicker);
