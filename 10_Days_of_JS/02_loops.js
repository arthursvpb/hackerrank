

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    var i = 0;

    while (i <= s.length) {
        if (/[aeiou]/.test(s.charAt(i))) {
            console.log(s.charAt(i));
        }
        i++;
    }

    var i = 0;

    while (i <= s.length) {
        if (/[aeiou]/.test(s.charAt(i)) == false) {
            console.log(s.charAt(i));
        }
        i++;
    }

    
}

