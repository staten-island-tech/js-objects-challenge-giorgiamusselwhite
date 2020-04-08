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


const presidents = [
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
]

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
