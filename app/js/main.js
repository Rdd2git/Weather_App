// import getData from "./axios";
let search = document.querySelector("form");
let currentCity = document.querySelector(".viewer__action");
let city = "London";

async function getData(city) {
  try {
    let userData = await axios({
      method: "get",
      baseURL: "https://api.openweathermap.org/data/2.5/weather",
      responseType: "json",
      params: {
        method: "get",
        APPID: "b9d6c3b529a4bdfda5ee9a6a843399af",
        units: "metric",
        lang: "ru",
        q: `${city}`,
      },
    });

    console.log(userData);
    return (data = userData);
  } catch (error) {
    console.log(`Axios request failed:${error}`);
  }
}

search.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(event.target);
  const input = [...formData.values()];
  console.log(input);
  let city = input;

  currentCity.textContent = input;

  let data = getData(city);

  console.log(data);

  event.target.reset();
});
