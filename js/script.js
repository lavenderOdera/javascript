'use strict';
// const bookings = [];
// const createBooking = function (flightNumber, passengerNum= 1, price= 300*passengerNum ) {
//     //falsey value
 
//     const booking = {
//         flightNumber,
//         passengerNum,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123' ,3)
// //passing argument
// const flight = 'LH234';
// const Abbie = {
//     name: 'Abigail Lavender',
//     pasport: 38728906432
// };
// const checkIn = function (flightName, passenger) {
//     flightName = 'LH542';
//     passenger = 'Miss. ' + passenger.name;
//     if (passenger.pasport === 38728906432) {
//         alert('checked in');
//     } else {
//         alert('wrong passpoort');
//     }
// };
// checkIn(flight, Abbie);
// console.log(flight);
// console.log(Abbie);
// const oneword = function (str) {
//   //remove spaces and convert it to lowercase
//     return str.replace(/ /g, '').toLowerCase();
// }//call back function enables us to split our codes in a more reusable manner
// const upperFirstWord  = function (str) {
//     const [first, ...others] = str.split('');
//     return [first.toUpperCase(), ...others].join('');
// };
// //higher order funcion
// const transformer = function (str, fn) {
//   console.log(`transformed by: ${str}`);
//   console.log(`transformed by: ${fn(str)}`);
//   console.log(`transformed by: ${fn.name}`);

// };
// //callback allow us to create abstructions
// //hide detail of some code implementation:abstraction
// transformer('Javascript is the best', upperFirstWord);
// // transformer('javascript is the best:', oneWord);
// const flight = function () {
//   console.log('h');
// }
// //function with higher level of abstraction
// document.body.addEventListener('click', flight);


//functions returning other functions
// const kenyaAirways = {

//     airline: 'kenyaAirways',
//     code: KH45,
//     bookings: [],
//     // enhanced literal syntax
//     booking(flight, name) {
//      console.log(` transformed by: ${fn.name}`);
//     }
// }
//function returning a anew function
//closures
// const great = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// //the first function great reaturned the  new variable stored in greatHey
//used in functional programing
// const great = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };
// // const greatHey = great('hey');
// // greatHey('jonas');
// // greatHey('Steven');
// // //using arrow  function
// // //.no return and curley brackets
// // const greatArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// // greatArr('hi')('jonas');
// const KenyaAir = {
//     airLine: 'kenyaAir',
//     keCode: 'KGH4',
//     bookings: [],
//     book(flightName, name) {
//         console.log(`${name},booked a seat on${this.airLine}  flight${this.keCode}${flightName}`);
//         // this.bookings.push(`flight:${this.keCode}${this.flightName} `, name);
//     }

// };
// //this keey word depends on how a problem is being called
// //append/push store and organise data
// KenyaAir.book(234, 'Abigail');
// KenyaAir.book(635, 'Lavender');
// const airLings = {
//     airLine: 'kenyaAirways',
//     keyCode: 'KG432',
//     bookings: [],
// };
// const book = KenyaAir.book;
// book.call(airLings, 23, 'Lavender Nelson');
// console.log(airLings);
// book.call(KenyaAir, 23, "Mandela Nelson");
// const wilson = {
//     airLine: "Wilson Airport",
//     keyCode: "kghs3",
//     bookings: [],

// };
// book.call(wilson, 23, "Jude Bollow");
// console.log(wilson);
// //apply method doesnt recieve a list of argument but take array of elements and pass it to the function
// const flightData = [583, 'abigail lavender'];
// book.apply(wilson, flightData);
// console.log(wilson);
// //the bind method
// //set this keeyword to any function call
// const bokW = book.bind("KenyaAir");
// const bookE = book.bind('wilson');
// bokW(23, ' Lavender Nelson');
// //partial application
// const bookEW3 = book.bind("KenyaAir", 23);
// bookEW3('lavender Abigail');
// bookEW3('Lavender Agwena');
// //with event listnerner higher order function.
// KenyaAir.planes = 300;
// KenyaAir.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };
// document
//   .querySelector(".buy")
//   .addEventListener("click", KenyaAir.buyPlane.bind(KenyaAir));

// //partial application
// //general function of adding tax
// //bind give us a new function
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 2000));
// const addVAT = addTax.bind(null, 0.16);
// console.log(addVAT(100));
// console.log(addVAT(23));
// const addVATT = function (VAT) {
//     return function (value) {
//         return value + value * VAT;
//     };

// };
// const vatta = addVATT(0.3);
// console.log(addVAT(100));
// console.log(addVAT(23));
/*codding challenge*/
//building a simple poll app
// const poll = {
//   question: "What is your favourite programing language",
//   option: ["0:javascript", "1:python", "2:rust", "3:C++"],
//   //this generates  ['0:javascript', '1:python', '2:rust', '3:C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         //get the answer
//         const answer = Number(
//             prompt(`${this.question}\n${this.option.join("\n")}\n(write option number)`)
//         );
//         console.log(answer);
//         //register answer
//         typeof answer === 'number' && answer < this.answers.length &&
//             this.answers[answer]++;
//         this.displayResult('');
//         this.displayResult('string');
//     },
//     displayResult(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`poll results are ${this.answers.join(',')}`);
//         }
//     }
// };
// // poll.registerNewAnswer();
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.displayResult.call({ answers: [5, 2, 3] }, "string");
// poll.displayResult.call({ answers: [1,5,3,9,6] }, "string");
//closure
//happens automatically
// const secureBk = function () {
//     let passengerC = 0;
//     return function () {
//         passengerC++;
//         console.log(`${passengerC} passengers`)
//     }
// };
// const booker = secureBk();
// booker();
// booker();
// booker();
// //dont need to return another function
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };
// g();
// f();
// const i = function () {
//     const b = 33;
//     f = function () {
//         console.log(b * 2)
//     }
// };
// i();
// f(); console.dir(f);
//coding clallenge#2  closure
(function () {
    const header = document.querySelector('h1');
    header.style.color = "red";
     document.querySelector("body").addEventListener("click", function () {
       header.style.color = "blue"; // When the body is clicked, change the text color of the header to blue
     });
    // document.querySelector('body').addEventListener('click', function () {
    //     header.style.color = 'blue';
    // })
    
})();
//working with Arrays




