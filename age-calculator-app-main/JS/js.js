"use strict";
// label
const label = document.getElementsByTagName("label");
// messages
const noNumberDay = document.querySelector(".messageNND");
const noNumberMonth = document.querySelector(".messageNNM");
const noNumberYear = document.querySelector(".messageNNY");
// invalid dates messages
const invalidDay = document.querySelector(".messageINVALIDD");
const invalidMonth = document.querySelector(".messageINVALIDM");
const invalidYear = document.querySelector(".messageINVALIDY");
// resoults
let yearR = document.querySelector(".yearsResoult");
let monthR = document.querySelector(".monthsResoult");
let dayR = document.querySelector(".daysResoult");
// test
const test = document.querySelector(".text");

document.querySelector(".iconDIV").addEventListener("click", function () {
  // ! reset - will do a refactoring later
  // day
  noNumberDay.style.display = "none";
  noNumberDay.style.color = "hsl(0, 1%, 44%)";
  label[0].style.color = "hsl(0, 1%, 44%)";

  invalidDay.style.display = "none";
  invalidDay.style.color = "hsl(0, 1%, 44%)";
  label[0].style.color = "hsl(0, 1%, 44%)";

  // month
  noNumberMonth.style.display = "none";
  noNumberMonth.style.color = "hsl(0, 1%, 44%)";
  label[1].style.color = "hsl(0, 1%, 44%)";

  invalidMonth.style.display = "none";
  invalidMonth.style.color = "hsl(0, 1%, 44%)";
  label[1].style.color = "hsl(0, 1%, 44%)";

  // year
  noNumberYear.style.display = "none";
  noNumberYear.style.color = "hsl(0, 1%, 44%)";
  label[2].style.color = "hsl(0, 1%, 44%)";
  invalidYear.style.display = "none";
  invalidYear.style.color = "hsl(0, 1%, 44%)";
  label[2].style.color = "hsl(0, 1%, 44%)";

  // function that check what is number
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  //cheching current date
  const current = new Date();

  // inputs
  const day = Number(document.querySelector(".dayInput").value);
  const month = Number(document.querySelector(".monthInput").value);
  const year = Number(document.querySelector(".yearInput").value);

  let ok = true;
  // Cheching if inputs fields are empty and numbers are valid
  if (!day || isNaN(day)) {
    noNumberDay.style.display = "block";
    noNumberDay.style.color = "red";
    label[0].style.color = "red";
    ok = false;
  } else if (day > getDays(year, month) || day < 1) {
    invalidDay.style.display = "block";
    invalidDay.style.color = "red";
    label[0].style.color = "red";
    ok = false;
  }
  if (!month || isNaN(month)) {
    noNumberMonth.style.display = "block";
    noNumberMonth.style.color = "red";
    label[1].style.color = "red";
    ok = false;
  } else if (month < 1 || month > 31) {
    invalidMonth.style.display = "block";
    invalidMonth.style.color = "red";
    label[1].style.color = "red";
    ok = false;
  }
  if (!year || isNaN(year)) {
    noNumberYear.style.display = "block";
    noNumberYear.style.color = "red";
    label[2].style.color = "red";
    ok = false;
  } else if (year > current.getFullYear()) {
    invalidYear.style.display = "block";
    invalidYear.style.color = "red";
    label[2].style.color = "red";
    ok = false;
  }

  if (ok) {
    //Making calculations
    console.log(day);

    console.log(
      `liczba miesicy w miesiacu numer ${month} to ${getDays(year, month)}`
    );

    let birthDate = new Date(year, month - 1, day);

    const currentMili = current.getTime();
    const birthDateMili = birthDate.getTime();
    let resoult = new Date(currentMili - birthDateMili);
    //!Got hepl on that one with https://blog.bitsrc.io/calculate-the-difference-between-two-2-dates-e1d76737c05a

    const calcFormatTmp =
      resoult.getDate() +
      "-" +
      (resoult.getMonth() + 1) +
      "-" +
      resoult.getFullYear();
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    //Subtract each member of our array from the default date
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    // changing values to resoults
    dayR.textContent = days_passed;
    monthR.textContent = months_passed;
    yearR.textContent = years_passed;
  }
});
