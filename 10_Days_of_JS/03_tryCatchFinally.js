

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var 
        a = s.split("");
        a = a.reverse();
        a = a.join("");
        console.log(a);

        } catch (err) {
        console.log(err.message);
        console.log(s);
    }
}

