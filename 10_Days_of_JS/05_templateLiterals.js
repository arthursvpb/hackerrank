// Useful links 
// https://stackoverflow.com/questions/33660518/why-can-functions-be-called-without-parentheses-when-using-template-strings
// http://www.ecma-international.org/ecma-262/6.0/#sec-tagged-templates
// https://www.hackerrank.com/challenges/js10-template-literals/topics

/* The first argument of a tag function is an array of string literals from the template,
and the subsequent values are the template's respective expression values.*/

// let [a, b] = expressions; it's a valid statement, ES6 allows destructuring of arrays into multiple variables

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {

    // ! ES6 allows destructuring of arrays into multiple variables
    const [a, p] = expressions;

    // Finding sqrt
    const root = Math.sqrt((p*p)-(16*a)),
          s1 = (p + root)/4,
          s2 = (p - root)/4;

    // Sort the elements
    return [s1, s2].sort();
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}