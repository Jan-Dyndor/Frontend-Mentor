"use strict";

// test
const test = document.querySelector(".text");

document.querySelector(".iconDIV").addEventListener("click", function () {
  // inputs
  const day = Number(document.querySelector(".dayInput").value);
  const month = Number(document.querySelector(".monthInput").value);
  const year = Number(document.querySelector(".yearInput").value);
  // label
  const label = document.getElementsByTagName("label");
  // messages
  const noNumberDay = document.querySelector(".messageNND");
  const noNumberMonth = document.querySelector(".messageNNM");
  const noNumberYear = document.querySelector(".messageNNY");
  // Cheching if inputs fields are empty
  if (!day || isNaN(day)) {
    noNumberDay.style.display = "block";
    noNumberDay.style.color = "red";
    label[0].style.color = "red";
    return;
  }
  if (!month || isNaN(month)) {
    noNumberMonth.style.display = "block";
    noNumberMonth.style.color = "red";
    label[1].style.color = "red";
    return;
  }
  if (!year || isNaN(year)) {
    noNumberYear.style.display = "block";
    noNumberYear.style.color = "red";
    label[2].style.color = "red";
    return;
  }
  // ! Check if putting there return is a good idea
  // chech if number is valid
  if (day < 1 || day > 31) {
    noNumberDay.style.display = "block";
    noNumberDay.style.color = "red";
    label[0].style.color = "red";
    return;
  }
  if (month < 1 || month > 31) {
    noNumberDay.style.display = "block";
    noNumberDay.style.color = "red";
    label[0].style.color = "red";
    return;
  }
  if (year < 1 || year > 31) {
    noNumberDay.style.display = "block";
    noNumberDay.style.color = "red";
    label[0].style.color = "red";
    return;
  }
  console.log(day);
});
