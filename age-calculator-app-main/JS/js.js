"use strict";

// test
const test = document.querySelector(".text");

document.querySelector(".iconDIV").addEventListener("click", function () {
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
  // ! Trzeeba będzie jeszcze zrobić rzeby za każdym razem po kliknięciu odświerzało się i nie było jużtych anpisów na czerwoo i wgl, narazie na około to zrobimy a potem refactoringiem w funkcjach zamkniemy
  //
  //
  // !moze zamknę w całe sprawdzanie poprawności w blok if i jak wejdziemy  w niego czy cos to na koncu return zeby nie przeszło do liczenia wieku bo inaczej sie rozwali imo
  // Cheching if inputs fields are empty and numbers are valid
  if (!day || isNaN(day)) {
    noNumberDay.style.display = "block";
    noNumberDay.style.color = "red";
    label[0].style.color = "red";
  } else if (day > getDays(year, month) || day < 1) {
    invalidDay.style.display = "block";
    invalidDay.style.color = "red";
    label[0].style.color = "red";
  }
  if (!month || isNaN(month)) {
    noNumberMonth.style.display = "block";
    noNumberMonth.style.color = "red";
    label[1].style.color = "red";
  } else if (month < 1 || month > 31) {
    invalidMonth.style.display = "block";
    invalidMonth.style.color = "red";
    label[1].style.color = "red";
  }
  if (!year || isNaN(year)) {
    noNumberYear.style.display = "block";
    noNumberYear.style.color = "red";
    label[2].style.color = "red";
  } else if (year > current.getFullYear()) {
    invalidYear.style.display = "block";
    invalidYear.style.color = "red";
    label[2].style.color = "red";
  }
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
  r;
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

  console.log(
    `Wynik: years ${years_passed}, miesiace ${months_passed} i dni: ${days_passed}`
  );
});
