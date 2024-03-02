console.log("Hello World");

console.log("my first code");


var FullName ="Muhammmad Junaid khan";

console.log(FullName);



//arithematic operators practice

let a =6;
let b = 8;

console.log("a+b = ",a+b);

console.log("a-b = ",a-b);

console.log("a*b = ",a*b);

console.log("a/b = ",a/b);

console.log("a%b = ",a%b);

console.log("a**b = ",a**b);

//Unary Operators//

//console.log("a++ = ",a++);

//console.log("--a = ", --a);


//Assignment Operators

a+=4; // a= a+4;

//console.log(a);

a-=4; // a = a-4;

//console.log(a);

a*=4; // a = a*4;

//console.log(a);


// Comparison Operators


//let c = 9;

//let d = 10;

//console.log("9=10", c==d);  // in this line a comaprison operator is used which states that c is equal to d and gives result in the form of true and false.

//console.log("9=10", c!=d); // in this line a comaprison operator is used which states that c is not equal to d and gives result in the form of true and false.


let e = 12;

let f = 13;

console.log("12===13", e===f); //in this line a comaprison operator is used which compares both variables values and their types "e" and "f"and gives result in the form of true and false.

console.log("12!==13", e!==f);


// Logical Operators

let g = 15;


let h = 16;

console.log("condition1(g)<(h) and g!==h", g<h && g!==h);   // && AND Logical Operator

console.log("condtion2 g<h OR g===h", g<h || g!==h );  // && OR  Logical Operator

console.log("condtion2 g<h NOT g===h", !(g>h) );  // && NOT   Logical Operator


//Condtional Statements

// Conditonal statements


let age = 36;

if (age <= 16)
{
  console.log("You cannot Vote");
}

if (age > 16)
{
  console.log("You can Vote");
 
}
/*
let mode ="dark"
let color; 

if (mode === "dark")
{
  color = "black";
}
else {
  
  color = "white"
}


console.log(color);

*/
// Odd or Even program

let num = 15;

if (num % 2 == 0)
{
  console.log(num + "   is Even");
}else{
  console.log (num + "  is Odd");
}


/* Else if statement

let mode = "grass";
let color ;

if (mode ==="dark")
{
 color = "black";
}
else if(mode ==="pink")
{
    color = "red";
}
else if(mode === "grass")
{
 color = "Green";
}
else 
{
    color ="none";
}


console.log(color);
*/


/*
======================================================

MDN Web docs very impooratant file for learning

=======================================================
*/


// Ternary Operators ===> An operator which works on 3 operands or Values

//ternary operators are used as an alternate to "if Else " statement.
/*
let  at = 25;

let result = at >= 18 ? "adult" : "not an Adult";

console.log(result);

*/

// switch statement
/*
const Animal = "Dinosaur";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}
*/


/*==========================================================================================

// Probelm#01

//Get a user to enter a number using prompt and then check if the number is a multiple  5




let number = prompt("Enter a number:");

if( number % 5 === 0)
{
 console.log("Number is a Mulriple of 5");
 
}
else 
{
    console.log("Number is not a multiple of 5");

}

==============================================================================================
*/


//=================>> Loops % & Strings<<==============================

// For loop
/*
for(i = 1; i<=5; i++)
{
 console.log("Hi");

}
*/

// sum of 1 to 100 numbers
/*
let sum = 0;


 for (i=0; i<=100; i++)
 {
   sum = sum+i;
 }

 console.log(sum);

 */



//while loop
/*
let sum = 0;
let i =1;
while (i<=6) 
{
console.log("i =", i);
i++
}
*/


/*==================> Do-whille loop<===================

let i =1;

do
{
  console.log("Apna College");
  i++
}
while(i<=7);
*/

//========================> For-off and For-in loop

// For-of loop ===> a loop for strings and arrays



//For-of loop

let astring = "Muhammad Junaid Khan"

for (let g of astring)
{
console.log("g = ",g);
}

// For-in loop ==============> used for objects and arrays

// For-in loop Usage=============> returns keys of given object

let student = 
{
  name: "junaid",
  aage:26,
 cgpa : 2.3,
 ISPASS:true,

};

for (let i in student)
{
  console.log(i);
}


//==================> Practice Quuiz#1<===================

//Print all even numbers from 0 to 100


for (let nuum = 0; nuum<=100; nuum++ )
{
  if(nuum%2 === 0)           // even number condition
  {
   console.log("number = ", nuum);
  }
  else
  {

  }

}

//============> Guess Game<=============
/*
let gamenum = 65;

let usernum = prompt("Guess the Game Number");

while ( usernum != gamenum)
{
  usernum = prompt("You entered the wrong number , kindly enter the correct number");
}

console.log("Congratulations, you have entered the Correct Number");*/


//===============> Strings <=====================

let obj =
{
  item : "shampoo",
  price: 10,
};

console.log("The cost of ", obj.item, "is", obj.price );

// Below is same line code using String Template literals  in simmpler Form

let output = `The cost of  ${obj.item} is  ${obj.price}`;
console.log(output);

let hgt = `This is a Template literal ${1+2+5}`;

console.log(hgt);


//Escape characters in JS

console.log("Apna\nCollege");  // "\n" is an Escape Sequence for shifting text to next line

console.log("Apna\tCollege"); // "\t" used for Space between 


// Methods in String in JS

// str.toUppercase    convert string to uppercase
// str.toLowercase    convert string to uppercase
// str.trim    Removes whitespaces from start and end of a string
// str.slice(start,end)===> returns parts of the given string
//str.concat========> joins 2 strings
// str.replace(search value, new value)
//str.charAt(idx)----> character at index

let str = " junaid khan";
    agt = str.toUpperCase();
console.log(agt);

let atc = "APNA COLLEGE";
    aew = atc.toLowerCase();
    console.log(aew);


    let ayt = "       cisco acadamy         ";
    console.log(ayt.trim());

    let aret = "MuhammadJunaidKhan";
    console.log(aret.slice(3,5));

     let ahy = "junaidkhan";
     console.log(ahy.charAt(5));


    // Arrays:

    // Array can be of 3 types

    // firstarray= Only numbers array
    //secondarray= only string array

    // third array= both numbers and string combined array
    let firstarray=["a","b","c","d",'e'];

    let secondarray = [1,34,45,54,6,565,56];

    let thirdarrang = ["a",86,"b",54,"h"]

    console.log(firstarray);
    console.log(firstarray.length);

    console.log(secondarray);
    console.log(secondarray.length);
    console.log(thirdarrang);
    console.log(thirdarrang.length);

    // indices in array
  // indices or its second name index is the of the data stored in array
  // we can also modify existing array by writing its index number before "=" sign and then writing the new value

  let agld = [65,678,5676,454,23,2324,5657];

  console.log(agld[5]);

  agld [5] = 6500; // array value changing or modification

   console.log(agld[5]);
  

   // Loops in array

   for(let idx = 0; idx<agld.length;idx++)
   {
           console.log(agld[idx]);
   }


let cities = ["Rawalpinid","islamabad", "Lahore", "multan"];

for(let city of cities)   // iterabke method for iteratiing within array
{
 console.log(city.toUpperCase());
}

// Practice Question

// create a Marks array with some marks of studeents and then find the Average marks of Entire class

let marks = [76,71,45,23,52,68,32];

 let sum = 0;

 // alternate way or simple way without loop
 // sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]

 for (let value of marks)
 {
       sum += value;  //----> sum = sum+value

 }

 let avg = sum/marks.length;
 console.log(`avg Marks of the Class = ${avg}` );


 // Practice Question#2

 // for a given array of prices fo 5 items--> [250,645,300,900,50]
 // all the items have 10% discount, change the array to store final price after applying offer

 let items = [550,340,760,342,560,432];
let i=0;
  for (let value of items)
  {
    let offer = value/10;

    items[i] = items[1] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;

  }

  for (let i= 0; i<items.length; i++)
  {
    let offer = items[i]/10;
     items[i] -= offer;

  }

  console.log(items);

  /* Methods in Array


  1) PUSH() ---> adds elements to end of Array

  2) POP()\ -----> deletes from end and return
  
  3) TOSTRING() -------------> converts arays to strings
  

  4) concat() --------------> joins multiple arrays and gives result

  5) shift ()-----------> delete an element from start and return

  6)unshift()---------------|> add an element to start

  7) Slice(startidx,endidx)-------> Returns a piece of Array

  8) Splice()----------> change original array(add,remove,replace)

  splice(startidx,delcount)

  */

  let fooditems = ["apple","orange","mango","tomato"];

  console.log(fooditems);

   fooditems.push("chips, lays,cheetos"); //--------> PUSH METHOD

  console.log(fooditems);

  fooditems.pop();

  console.log(fooditems);




  let numberarray = [11,4,5,6,7,8,9,12,34,45];
  

  numberarray.toString();
  console.log(numberarray);

  let joinarray = fooditems.concat(numberarray);
  console.log(joinarray);

  fooditems.unshift("lemon");

  fooditems.shift();

  console.log(fooditems);

  console.log(fooditems);

  console.log(fooditems.slice(1,3));

  console.log(fooditems.splice(0,0,"strawberry","pineapple"));

  //------------> Functions in JavaScript<----------------------

  /* We can define functions in Javascript in 2 ways:

  1st way:
  function functionname()
  {
    do some work 
  }

2nd Way:

  function(parameter1,parmeter2) --------> parameter is also called variable
  {
    do some work
  }

  */

  function myfirstfunc()
  {
    console.log("my first fucntion");
    console.log("I am learning JS")
  }


  myfirstfunc();

  function additionofnumbers(x,y)
  {
       let additionofnumbers = x+y;
       return additionofnumbers;
  }

  let valuee = additionofnumbers(5,6);
  console.log(valuee);


  ///------------>Arrow Function'<------------------

  /* Arrow Function defination===> Short Way of writing a Function

  Syntax=====> const functionname = (parameter1,parameter2)
  {
    do some work
  }
  */

  const arrowsum = (x,y)=>
  {
       console.log(x+y);
       return x+y;
  };



  /////////-------> PRACTICE QUESTIONS<----------------------

  //Q1):  create a function using the fucntion keyword that takes string as an argument and returns the number of vowels in the string

  //Q2): create an arrown funciton and do the same task as mentioned above


  /*

  function countvowels(str)
  {
          let count = 0;
          for (char of str)
          {
            if(
              char === "a" || char === "e" || char ==="i" || char === "o" || char ==="u"

            )
            {
                 count++;
            }
          }
           return count;
  }

*/

// Same Task with Arrow Function
const countvooow = (str)=>
{
  let count = 0;
          for (char of str)
          {
            if(
              char === "a" || char === "e" || char ==="i" || char === "o" || char ==="u"

            )
            {
                 count++;
            }
          }
           return count;
}




// forEach ---------------> A LOOP IN ARRAYS

//SYNTAX : arr.forEach(callback function)

// forEach has three parameters which can be passed in forEach (1) Value also known as val  (2) index also known as idx  (3) array itself

//Callback: HERE, It is a Function to execute for each element in the array

//CALLBACK: A CALLBACK is a function passed as an argument to another function


/*HIGHER ORDER FUNCTIONS DEFINITION: A Function which uses another fucntion as a parameter or value is called a Higher Order Function

                                                       OR           

A function which uses a callback function is called a Higher Order Function

*/  


/* arr.forEach((val)=>
{
  conolse.log(val);
}

)*/

let arr = [1,2,3,4,5,6];

arr.forEach(function printval(val)              // val means the value at each index in  Array named (arr)
{
 console.log(val);
});

// Above Same task in the form of Arrow Function

let prr = ["RWP","ISB","KARACHI","LAHORE"];

prr.forEach(val=>
  {
      console.log(val);
  });


  ///---------------> PRACTICE QUESTION<--------------------------------

  //For a given array of numbers , print the square of each value using the forEach loop

  let testarray = [9,8,7,6,5,4,3,2,1];

  testarray.forEach(function printsquare(val,idx)
  {
    
    console.log(val*val,idx);
  });


  /* Methods in an Array

  1) Map Method: Creates a new array with the results of some operation. The value its callbacl returns are used to form new array

  Syntax:

 arr.map(callback Fnx(value,index,array))

 Example:

 let newArr = arr.map((val)=>
 {
  return val*2
 });*/


 let err = [45,676,2345,234,678,767];

 let duplarray = err.map((val)=>
 {
  return val;
 });

 console.log(duplarray);


 /* 2) Filter Method: Creates new elements of array for a condition filter.

 Example: all even elements

Example: 
 
let newArr = arr.filter((val)=>
{
  return val % 2 ===0;
})
 
 */


let renrr = [1,2,3,4,5,6,7,8,9,10,11,12,2,12,13,14];
    
let evenarray = renrr.filter((val) =>
{
    return val % 2 == 0;
});

console.log(evenarray);


// 2) Reduce Method

// Perform some operations & reduce the array  to a single value.  It returns the single value.


let krr = [1,3,5,6,7];

const  op = krr.reduce((res,curr)=>
{
  return res+curr;
});

console.log(op);



//------------------------------------> DOM <----------------------------------------

//DOM: DOM is the method of accessing HTML code in javascript

/*

// Methods of Acessing Elements


// 1) Selecting with id

document.getElementById(" my Id")


// 2) Selecting with class

document.getElementsByClassName(" myClaass")

// 3) Selecting with tag

document.getElementById(" tagname for example p")





*/


/*------------------------> DIR METHOD<----------------------------


In JavaScript, console.dir() is a method used to display an interactive listing of all properties of a specified JavaScript object. It outputs a
 list of an object's properties, including its own properties and those inherited from its prototype chain. This method is particularly useful
  for inspecting complex objects and exploring their structure.

Here's a basic example of how console.dir() is used:


const myObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: 
    
    "USA"
  }
};

An alternate method of accessing Elemeens is called the query Selector Method

Syntax: documwent.queerySelector("#idname");


console.dir(myObject);
When you run this code, console.dir() will display a detailed listing of the myObject including its properties and nested objects, 
allowing you to examine its structure in the browser's developer console or the console of your JavaScript environment.


*/


//-------------------------> DOM PRACTICE QUESTIONS<-------------------------------

//Question#01) Creates a H2 elemeent with text - "HELLO-JAVASCRIPT" , Append "FROM APNA COLLEGE STUDENTS" to this Text using JS.

//let h2 = document.getElemnentById(javaheading);

//console.dir(h2);

// not solved


// Question#2) Create 3 Div Elements by class name - box. Access them and add some unique text to each of them.





//-----------------------------> DOM MANIPULATION<-----------------------------

/*Attributes: 

1) getAttribute(attr) ----> to get the attribute value

2) set attribute(attr,value) -------------> to set the attribute value


Node style:

1) node.style -------------> to change the style of any node in htmL (for example: div is a node so the code will be:
  
  div.style.backgroundcolor = "")

*/

let div = document.getElementById("box");
console.log(div);

div.style.backgroundColor = "Green";
div.style.color = "White";


// ---------------------> DOM MANIPULATION<-----------------------


/* Insert Elements        

let el = document.createElement("div")

1) node.append(el)  -------> adds at the end of the node ( inside) 


2) node.prepend(el)  -------> adds at the start of the node ( inside) 


3) node.before(el)  -------> adds before the node  ( outside ) 


4) node.after(el)  -------> adds at the end of the node ( outside)



 Delete Element

 1) node.remove() ---------> Removes the Element


*/


//---------------------->> Events in JavaScript<<------------------------

// Event Definition: The change in the state of an Object is called Event

// Events are fired to notify code of "interesting changes " that may effect code execution


// For complete  list of Events search on google " event MDN Web Docs ""


// 1) onclick ----->1 click
//2) ondbclick------>2 click

let btn1 = document.getElementById("btn1");

btn1.onclick = () => 
{
  console.log("button was clicked");

  let a = 26;

  a++ ;

  console.log (a);
}




