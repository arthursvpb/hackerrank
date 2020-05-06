function main() {
    const PI = Math.PI;
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
  
    // Print the area of the circle:
    let area = PI * Math.pow(r, 2);
    console.log(area);
    
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter);

}