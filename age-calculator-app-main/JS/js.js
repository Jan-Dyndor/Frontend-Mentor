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

// refactoring -- functions
function colorLabelDisplayDayNoNumber(color, display) {
  noNumberDay.style.color = color;
  noNumberDay.style.display = display;
  label[0].style.color = color;
}
function colorLabelDayInvalidNumber(color, display) {
  invalidDay.style.color = color;
  invalidDay.style.display = display;
  label[0].style.color = color;
}
function colorLabelMonthNoNumber(color, display) {
  noNumberMonth.style.display = display;
  noNumberMonth.style.color = color;
  label[1].style.color = color;
}
function colorLabelMonthInvalidNumber(color, display) {
  invalidMonth.style.display = display;
  invalidMonth.style.color = color;
  label[1].style.color = color;
}
function colorLabelYearNoNumber(color, display) {
  noNumberYear.style.display = display;
  noNumberYear.style.color = color;
  label[2].style.color = color;
}
function colorLabelYearInvalidNumber(color, display) {
  invalidYear.style.display = display;
  invalidYear.style.color = color;
  label[2].style.color = color;
}
// reset function
function reset(color, display) {
  colorLabelDisplayDayNoNumber(color, display);
  colorLabelDayInvalidNumber(color, display);
  colorLabelMonthNoNumber(color, display);
  colorLabelMonthInvalidNumber(color, display);
  colorLabelYearNoNumber(color, display);
  colorLabelYearInvalidNumber(color, display);
}

document.querySelector(".iconDIV").addEventListener("click", function () {
  // reset warnings
  reset("hsl(0, 1%, 44%)", "none");
  // function that check what is number of days in month
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  //cheching current date
  const current = new Date();

  // inputs
  const day = Number(document.querySelector(".dayInput").value);
  const month = Number(document.querySelector(".monthInput").value);
  const year = Number(document.querySelector(".yearInput").value);
  //bool vlaue to control if any input is wrongly done
  let ok = true;
  // Cheching if inputs fields are empty and numbers are valid
  if (!day || isNaN(day)) {
    colorLabelDisplayDayNoNumber("red", "block");
    ok = false;
  } else if (day > getDays(year, month) || day < 1) {
    colorDayInvalidNumber("red", "block");
    ok = false;
  }
  if (!month || isNaN(month)) {
    colorLabelMonthNoNumber("red", "block");
    ok = false;
  } else if (month < 1 || month > 31) {
    colorLabelMonthInvalidNumber("red", "block");
    ok = false;
  }
  if (!year || isNaN(year)) {
    colorLabelYearNoNumber("red", "block");
    ok = false;
  } else if (year > current.getFullYear()) {
    colorLabelYearInvalidNumber("red", "block");
    ok = false;
  }

  if (ok) {
    //Making calculations
    //! Unfortunately it not work so well

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
    //Subtract each member of array
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    // displaying values
    dayR.textContent = days_passed;
    monthR.textContent = months_passed;
    yearR.textContent = years_passed;
  }
});
