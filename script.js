// let js = "amazing";

// console.log(5 + 6 + 6);

// console.log("adib");

// let country = "India";
// let population = "3 billion";

// console.log(country);
// console.log(population);

// let JSisfun = true;
// console.log(JSisfun);
// console.log(typeof true);

const mass = 92;
const hight = 1.69;
const johnBmi = mass / hight ** 2;

const markmass = 52;
const markhight = 1.95;
const markBmi = markmass / markhight ** 2;
const check = johnBmi > markBmi;
console.log(johnBmi, markBmi, check);

// challange 1
let challange;
if (johnBmi > markBmi) {
  challange = `Mark's BMI (${markBmi})is higher then John's BMI (${johnBmi}) !`;
} else {
  challange = `johans's BMI (${johnBmi})is higher then mark's BMI(${markBmi}) !`;
}
console.log(challange);
