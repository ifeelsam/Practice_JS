// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 

let date = new Date();

// mm-dd-yyyy
console.log(date.getMonth()+1 + "-" + date.getDate() +"-"+ date.getFullYear())

// mm/dd/yyyy
console.log(date.getMonth()+1 + "/" + date.getDate() +"/"+ date.getFullYear())

// dd-mm-yyyy
console.log(date.getDate()+ "-" + date.getMonth()+1 +"-"+ date.getFullYear())

// dd-mm-yyyy
console.log(date.getDate()+ "/" + date.getMonth()+1 +"/"+ date.getFullYear())