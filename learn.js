//Variables

//Numbers (no integers or doubles or anything like that)
console.log(2/3); //1.5, not 1
console.log(Math.floor(3/2)); //1, not 1.5

    //Math functions
    var sinofone = Math.sin(1);
    var circumference = 2 * MATH.PI * r;

    //String to integer
    var stringtoint = parseInt('123', 10); // 123 in base 10 can convert to any other base

//Strings (sequences of unicode characters)
var howlong = 'hello'.length; //5
var characterat = 'hello'.charAt(0); //h
var replacement = 'hello, world'.replace('world', 'mars'); // "hello, mars"
var upper = 'hello'.toUpperCase(); // "HELLO"

//Different types of variables

    //let variables are available in the block it is enclosed in
    for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
        // myLetVariable is only visible in here
    }

    //const variables cannot be changed
    const Pi = 3.1415926;

    //var variables does not have any restrictions. 
    var a;
    var name = 'simonnn';

//Loops

    //Same as java
    for(let i = 0; i < 5; i++){
        console.log(i);
    }

    //Also has for...of and for...in
        const array1 = ['a', 'b', 'c'];

        //for...of
        for (const element of array1) {
            console.log(element);
            // expected output: "a"
            // expected output: "b"
            // expected output: "c"
        }

        

        //for...in
        const constantvariables = { a: 1, b: 2, c: 3 };

        for (const property in constantvariables) {
            console.log(`${property}: ${constantvariables[property]}`);

            // expected output:
            // "a: 1"
            // "b: 2"
            // "c: 3"   
        }

//switch statement
switch (action) {
    case 'draw':
      drawIt();
      break;
    case 'eat':
      eatIt();
      break;
    default:
      doNothing();
}

//OBJECTS
var obj = new Object();
var obj = {
    name: 'Carrot',
    _for: 'Max', //'for' is a reserved word, use '_for' instead
    details: {
        color: 'orange',
        size: 12
    }
};

var deets = obj.details.color; // orange
var bigness = obj['details']['size']; // 12

    //also this
    function Person(name, age) {
        this.name = name;
        this.age = age;
      }
      
      // Define an object
      var you = new Person('You', 24); 
      // We are creating a new person named "You" aged 24.

//arrays
var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3

    //or
    var b = ['dog', 'cat', 'hen'];

    //look at for...of to see how to loop through an array  

    b.push('fox');

    /* Other array methods
    a.toString();	//Returns a string with the toString() of each element separated by commas.
    a.toLocaleString();	//Returns a string with the toLocaleString() of each element separated by commas.
    a.concat(item1[, item2[, ...[, itemN]]]);	//Returns a new array with the items added on to it.
    a.join(sep);	//Converts the array to a string — with values delimited by the sep param
    a.pop();	//Removes and returns the last item.
    a.push(item1, ..., itemN);	//Appends items to the end of the array.
    a.shift();	//Removes and returns the first item.
    a.unshift(item1[, item2[, ...[, itemN]]]);	//Prepends items to the start of the array.
    a.slice(start[, end]);	//Returns a sub-array.
    a.sort([cmpfn]);	//Takes an optional comparison function.
    a.splice(start, delcount[, item1[, ...[, itemN]]]);	//Lets you modify an array by deleting a section and replacing it with more items.
    a.reverse();	//Reverses the array.
    */

//functions
function add(x,y){
    var total = x+y;
    return total;
}

console.log(add(2,3));

    //interesting concept of holding more than the parameters it asked for
    function addmystery() {
        var sum = 0;
        for (var i = 0, j = arguments.length; i < j; i++) {
          sum += arguments[i];
        }
        return sum;
      }
      
    addmystery()()(2, 3, 4, 5); // 14

    //shorter version of this but averaging the number also
    function avg(...args) {
        var sum = 0;
        for (let value of args) {
          sum += value;
        }
        return sum / args.length;
      }
      
    avg(2, 3, 4, 5); // 3.5
    avg.apply(null, [2, 3, 4, 5]); // 3.5

    //RECURSION
    var charsInBody = (function counter(elm) {
        if (elm.nodeType == 3) { // TEXT_NODE
          return elm.nodeValue.length;
        }
        var count = 0;
        for (var i = 0, child; child = elm.childNodes[i]; i++) {
          count += counter(child);
        }
        return count;
    })(document.body);

    //CLOSURE???
    function makeAdder(a) {
        return function(b) {
          return a + b;
        };
      }
    var add5 = makeAdder(5);
    var add20 = makeAdder(20);
    add5(6); // returns 11
    add20(7); // returns 27













        





