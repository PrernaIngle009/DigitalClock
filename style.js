const city = "Mumbai";
const apikey = "f78f4ea85b64fa73bbfc88b2c2b7e4da";
function clock() {
  let days = document.querySelectorAll(".day");
  let date = new Date();
  let hour = document.getElementById("hour");
  let min = document.getElementById("min");
  let month = document.getElementById("month");
  let Sday = document.getElementById("Sday");
  let period = document.getElementById("pm");
  let currentDay = date.getDay();
  let index = currentDay === 0 ? 6 : currentDay - 1;
  let hr = date.getHours();
  let mint = date.getMinutes();
  let tday = date.getDate();
  let ampm = hr >= 12 ? "PM" : "AM";
  let mon = date.getMonth();
  month.innerText = mon + 1;
  period.innerText = ampm;
  if (hr > 12) {
    hr = hr - 12;
  }
  if (hr > 12) hr -= 12;
  if (hr === 0) hr = 12;
  hr = hr < 10 ? "0" + hr : hr;
  mint = mint < 10 ? "0" + mint : mint;
  hour.innerText = hr;
  min.innerText = mint;
  Sday.innerText = tday;
  days.forEach((day, i) => {
    if (i === index) {
      day.classList.add("active");
    } else {
      day.classList.remove("active");
    }
  });
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    )
    .then((res) => {
      const temp = Math.round(res.data.main.temp);
      document.querySelector(".temp").innerText = `${temp}°C`;
    });
}
setInterval(() => {
  clock();
}, 1000);
