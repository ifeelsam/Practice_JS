// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 

function areaOfTrinage(side1, side2, side3)
{
    let s = (side1 + side2 + side3) / 2;

    // Use Heron's formula to calculate the area of the triangle
    let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));   

    return area;
}

console.log(areaOfTrinage(5,6,7))


