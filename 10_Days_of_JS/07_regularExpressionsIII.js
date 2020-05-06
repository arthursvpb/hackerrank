// https://www.hackerrank.com/challenges/js10-regexp-3/topics
// https://regexr.com/
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    // Notes:
    // \d will match any [0-9] digit
    // + will match any string that contains at least one digit (will match the following numbers)
    // g flag is a global match (find all matches rather than stopping after the first match)
    const re = /\d+/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}