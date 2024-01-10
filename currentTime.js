/*  1. Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : 
    Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/


let time = new Date();
let days = [ 'Sunday', "Monday", 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];

console.log("Today is : " + days[time.getDay()]);
if (time.getHours < 13){
console.log("Current time is : "+ time.getHours(), "AM", time.getMinutes(), time.getSeconds())
} else {
    console.log("Current time is : "+ (time.getHours()- 12) , "PM", time.getMinutes(), time.getSeconds())
}