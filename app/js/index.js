const axios = require("axios");
async function getUser() {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Chelyabinsk&units=metric&lang=ru&APPID=b9d6c3b529a4bdfda5ee9a6a843399af"
    );
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}
getUser();
