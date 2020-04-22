/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
};
console.log(this); */

/* const homer = {
name:"Homer":
ager: 32,
family: {
    wife: {
        name: "Marge",
        age: 32
    },
    son: {
        name: "Bart",
        age: 10
     }
    },
    pets: ["cat", "dog"]    
};

Homer.family.daughter = {
    name: "Lisa",
    age: 8
}; */

//destructuring
/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
};

const {name, age} = Riya;

const calc = {
    add: function() {
        return x = y;
    }
};

const {add, divide, cosine} = calc;

const {name, poster} = movie; */
/* 
const Angel = Riya; 
//this is not a copy, its a reference to!!!
Angel.name = "Angel";

const Angel = {};
Angel.dob = Riya.dob; */


/* const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
] */

/* //challenge q1

const democrats = presidents.filter(president => president.party === "D");

console.log(just_democrats); */

//challenge q2

/* function 1_term_R(presidents) {
   if (president.party === "R" && president.terms === 1); 
   { return president;
   }
};
console.log (1_term_R); */

//challenge q3
/* var last_3_presidents = presidents.slice(10,11,12);
console.log (last_3_presidents); */

//challenge q4
/* const 2_term_D = presidents.filter {
(president => president.party === "D" && president.terms === 2) 
};
console.log (2_term_D); */

//BONUS
/* const LBJ = presidents{
    if (LBJ.terms === 2) {
        greeting = "LBJ served two terms";
    }

    
 else {
  greeting = "LBJ did not serve two terms";
}
};
 */


 //const header = document.querySelector(".header");
/* const items = document.querySelectorAll(".list-item");

const itemsArr = Array.from(items);

itemsArr.forEach((element) => (element.style.backgroundColor = "red")); */

//const header = document.querySelector("#Idheader");

/* const header = document.getElementById("Idheader");

const toggle = document.querySelector(".toggle"); */

//header.classList.add("Karen");

//header.classList.remove("Karen");

/* toggle.addEventListener("click", function () {

header.classList.toggle("Karen");

});

*/

//button click change background to red

//button click change background to blue


const background = document.querySelector(".background");

const button = document.querySelector(".button");

const headerTwo = document.querySelector(".header-two");



/* changeBtn.addEventListener("click", function () {

if (background.style.backgroundColor !== "rgb(255, 0, 0)") {

background.style.backgroundColor = "rgb(255, 0, 0)";

headerTwo.textContent = "Red";

} else {

background.style.backgroundColor = "rgb(0, 0, 255)";

headerTwo.textContent = "Blue";

}

});

*/

///3 numbers for R G and B

//get random number, make random number usable


button.addEventListener("click", function () {

const R = Math.floor(Math.random() * 255); //scoped variable

const G = Math.floor(Math.random() * 255);

const B = Math.floor(Math.random() * 255);

background.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;

headerTwo.textContent = `rgb(${R}, ${G}, ${B})`;

});