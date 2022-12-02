const Month = document.querySelector("h2");
const day = document.querySelector(".day");
const Day = document.querySelector("h1");
const Year = document.querySelector(".year");



const date = new Date();
const month = date.getMonth();


Year.innerText = date.getFullYear();
Month.innerText = date.toLocaleString("en", {month:"long",});
day.innerText = date.toLocaleString("en", {weekday:"long",} )
Day.innerText = date.getDate();

