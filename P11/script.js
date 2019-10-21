// console log mirip System.out.print di Java
console.log("Hello World");

// ======================================================
// deklarasi variable
var a = "palembang";
var b = 42;
var c = true;
var d = 3.14;
var my_colors = ['Blue', 'Yellow', 'Red'];
var my_numbers = [1,2,3,4,5];

// ======================================================
// type data
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof my_colors);

// ======================================================
// logical (if)
var animal = 'kitty';
var result;

// example 1
result = (animal == 'kitty') ? 'cute' : 'still nice';
console.log(result);

// example 2
if(animal === 'kitty') {
  result = 'cute';
}else{
  result = 'still nice';
}

console.log(result);

// ======================================================
// Array
var colors = ['Blue', 'Yellow', 'Red'];
console.log(colors[1]);
var animals = new Array('cat', 'dog');
console.log(animals[0]);

// ======================================================
// looping by number
for(var x = 0; x <= 10; x++)
  console.log(x);

// ======================================================
// looping object
for(var color of my_colors) {
  console.log(color);
}

// ======================================================
// Function

var msg = "This this msg";
function showMsg(){
  console.log(msg, this);
}
showMsg();

// this = root
var anonimFunc = () => {
  console.log(msg, this);
}
anonimFunc();

// this
var anonimFunc2 = function() {
  console.log(msg, this);
}
anonimFunc2();

// ======================================================
// reduce
var result = my_numbers.reduce((sum, num) => {
  console.log(sum, num);
  return sum + num;
});
console.log(result);


// ======================================================
// filter
console.log("ganjil : " + my_numbers.filter(n => n % 2 !== 0));

// ======================================================
// set interval
setInterval(() => {
  console.log("I'm internal, show data each 3 seconds")
}, 3000);
