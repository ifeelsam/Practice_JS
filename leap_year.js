// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

function leapyear(year){
    if (year % 400 === 0 && year % 100 === 0){
        console.log(year, "is a leap year")
    } 
    else if(year % 4 !== 0 && year === 100){
        console.log(year, "is a leap year")
    }
    else{
        console.log(year, "is not a leap year")
    }
}

// Test the function with various years and log the results to the console
leapyear(2016) // Expected output: true
leapyear(2000) // Expected output: true
leapyear(1700) // Expected output: false
leapyear(1800) // Expected output: false
leapyear(100) // Expected output: false