// Pradžiai užduotėlės su String'ais;
// Stringas kurį testuosime:
const sentence = "Petras Jonaitis";

// 1. Parašykite funkciją clearSpaces, kuri paima stringą, kaip argumentą ir grąžina stringą be tarpų;

const clearSpaces = (string) => string.replaceAll(" ", "");
console.log(clearSpaces(sentence));

// 2. Parašykite funkciją changeName, kuri paima stringą su vardu ir pavarde kaip argumentą ir sukeičia juos vietomis ir tada grąžina;

const changeName = (string) => {
  let arr = string.split(" ");
  arr = arr.reverse();
  string = arr.join(" ");
  return string;
};
console.log(changeName(sentence));

// 3. Parašykite funkciją deleteBoundaries, kuri paima stringą, kaip argumentą ir grąžina be pirmos ir paskutinės raidės;

const deleteBoundaries = (string) => string.slice(1, string.length - 1);
console.log(deleteBoundaries(sentence));

// Užduotys su masyvais
// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];

// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

const arrDoubled = (array) => array.map((number) => number * 2);
console.log(arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// pvz arrMultiplied([5, 3, 1], 5) grąžina [25, 15, 5]

const arrMultiplied = (array, numbertoMultiply) =>
  array.map((arrNumber) => arrNumber * numbertoMultiply);
console.log(arrMultiplied(numbers, 10));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
// pvz arrCountTwos([5, 2, 3, 1, 2, 2]) grąžina 3;

function arrCountTwos(array) {
  const numberOfTwos = array.filter((num) => num === 2);
  return numberOfTwos.length;
}
console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfFirst = (array, number) =>
  array.findIndex((arrNum) => arrNum === number);
console.log(arrIndexOfFirst(numbers, 8));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfLast = (array, number) => array.lastIndexOf(number);
console.log(arrIndexOfLast(numbers, 2));

// 6. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

function findMinMaxNumber(array) {
  const descArr = array.sort((a, b) => (a > b ? -1 : 1));
  const maxNumber = descArr[0];
  const minNumber = descArr[array.length - 1];
  const findedMinMax =
    "Maziausias: " + minNumber + ", Didziausias: " + maxNumber;
  return findedMinMax;
}
console.log(findMinMaxNumber(numbers));

// 7. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
//reikalingi String ir Array metodai

const checkForLetters = (string, letter) => {
  let chars = string.split("");
  chars = chars.filter((char) => char === letter);
  const filteredLetters =
    "Raide " +
    '"' +
    letter +
    '"' +
    " sakinyje rasta " +
    chars.length +
    " kartus";
  return filteredLetters;
};
console.log(checkForLetters("Hello, how are youuu?", "u"));

// 8. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atskirą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

let arr2 = [8, "Hello", "click", "u", 7, 4, "a", "a", 3, 6, "chair", , 10, 1];

const findNumbersAndSort = (array) =>
  array
    .filter((item) => typeof item === "number")
    .sort((a, b) => (a < b ? -1 : 1));
console.log(findNumbersAndSort(arr2));

// 9. Sukurkite funkciją checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

let arr1 = [2, 7, 6, 9, 5];

function checkIfAllSmaller(array, max) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkIfAllSmaller(arr1, 5));

// 10. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Alytus",
  "Marijampolė",
  "Mažeikiai",
  "Jonava",
  "Utena",
];
//reikalingi String ir Array metodai

const filteredByLetter = (array, letter) => {
  let filteredCities = [];
  array.forEach((elem) => {
    let newArr = elem.toLowerCase().split("");
    if (newArr.includes(letter)) {
      filteredCities.push(elem);
    }
  });
  return filteredCities;
};

console.log(filteredByLetter(citiesOfLithuania, "u"));
