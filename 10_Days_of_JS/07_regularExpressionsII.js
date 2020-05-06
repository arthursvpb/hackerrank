// https://www.hackerrank.com/challenges/js10-regexp-2/submissions/code/157330013
// https://regexr.com/542gp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    // Notes:
    // ^ will find any string with any of this words inside parenthesis
    // [] will find any character inside brackets
    // [.] will match the "." string, not a single character because of the brackets
    // [A-Za-z] will find any letters of the english alphabet.
    // [A-Za-z]+$ will catch any ending of the alphabet (excludes "." or other special characters)
    let re = /^(Mr|Mrs|Ms|Dr|Er)[.][A-Za-z]+$/;
    /*
     * Do not remove the return statement
     */
    return re;
}

