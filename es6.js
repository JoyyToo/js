// in es6 let is the new var
// destructuring objects
let foo = 2;

let egg = 4;
foo;
let max = egg + foo;

document.write(max+ '<br>');


function nutrition({weight: w, height: h, min:m}) {
    let bmi = w / Math.pow(h, 2);
    if (bmi < m){
        alert('You are underweight');
    }
    return bmi;
}
nutrition({weight: 125, height: 64, min: 18});
// document.write(nutrition({weight:125, height:65, min:12} )+ '<br>');

let nam = 'grizzly';
let says = 'growl';
let zoo = { nam, says };
document.write(zoo);


//template strings
 // instead of concatenation each time or listing
    let name = 'Joy';
    let thing = 'party';
    let greet = `Hi my name is ${name} and I love to ${thing}.`;
    document.write(greet +'<br>');


 // block scoping used mostly in control statements and loops
 let a = 1;

 if (true) {
     //using var since its inside a scope
     var b = 2;
 }

 document.write(b + '<br>');


 // classes
class Account{
    constructor() {

    }
    balance() {
        return 2000;
    }
    deposit(){
        let amount = 200;
        let bal = this.balance();
        let am = amount + bal;
        return `The new amount is ${am} `;
    }

}
let acc = new Account();
document.write(acc.balance() + '<br>');

class Child extends Account{
    constructor() {
        super()
    }
}
let child = new Child();
document.write(child.deposit());


// arrow functions
[0, 1, 2].map(val => val++);
