//Write a js program to convert lowercase string to uppercase.
var a="ahmad touseef";
var b=a.toUpperCase();                     //lower case to upper case
console.log(b);

//Write a js program to convert uppercase string to lowercase.
var a="AHMAD TOUSEEF";
var b=a.toLowerCase();                  //upper case to lower case 
console.log(b);

//Write a js program to toggle case of each character of a string.
function titleCase(str){
          var arr=str.split(" ");
          var result=arr.map(
                    function(val){
                              return val.toLowerCase();
                    });
                    return result;
          }
         console.log(titleCase("A QUICK BROWN FOX JUMPS OVER THE LAZY DOG"));

//Write a js program to count total number of words in a string.
var a="Hurrah! i am so happy";
console.log(a.length);               //Count total number of words 

// Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
var student={name:"David Rayy",sclass:"VI",rollno:12};
var keys= Object.keys(student);
console.log(keys);

// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};    
console.log("Before deleting the Rollno",student);

// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
delete student.rollno;
console.log("After deleting the Rollno",student);

// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
var student = {
          name : "Hassan",
          sclass : "VI",
          rollno : 12,
           age : 23 
      };
      
      let leng = Object.keys(student).length   
      console.log(`This Object lenght is ${leng}`);
      
      var student = {
          name : "Hassan",
          sclass : "VI",
          rollno : 12,
           age : 23 
      };
console.log(student);

// Write a JavaScript program to display the reading status (i.e. display book name,
//           author name and reading status) of the following books.
//           var library = [
//           {
//           author: 'Bill Gates',
//           title: 'The Road Ahead',
//           readingStatus: true
//           },
//           {
//           author: 'Steve Jobs',
//           title: 'Walter Isaacson',
//           readingStatus: true
//           },
//           {
//           author: 'Suzanne Collins',
//           title: 'Mockingjay: The Final Book of The Hunger Games',

var library = [ 
          {
              title: 'Bill Gates',
              author: 'The Road Ahead',
              readingStatus: true
          },
          {
              title: 'Steve Jobs',
              author: 'Walter Isaacson',
              readingStatus: true
          },
          {
              title: 'Mockingjay: The Final Book of The Hunger Games',
              author: 'Suzanne Collins',
              readingStatus: false
          }];
      
      for (var i = 0; i < library.length; i++) 
         {
          var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
          if (library[i].readingStatus) {
            console.log("Already read " + book);
          } else
          {
           console.log("You still need to read " + book);
          }
         };

// Write a JavaScript program to get the volume of a Cylinder with four decimal places
// using object classes.
// Volume of a cylinder : V = πr2h
function Cylinder(cyl_height, cyl_diameter) {
          this.cyl_height = cyl_height;
          this.cyl_diameter = cyl_diameter;
        }
      
      Cylinder.prototype.Volume = function () {
          var radius = this.cyl_diameter / 2;
          return this.cyl_height * Math.PI * radius * radius;
      };
      
      var cyl = new Cylinder(7, 4);
      console.log('volume =', cyl.Volume().toFixed(4));
// Write a js program to print all odd number between 1 to 100
      for (var i = 1; i < 100; i += 2) {
              console.log(i);
          }
// Write a js program to find sum of all natural numbers between 1 to n.
function disp(n){
              var sum = 0;
                for(i = 0; i <= n; i++){
                  sum += i; 
                   }
              console.log(sum)
                   }
             disp(200);

