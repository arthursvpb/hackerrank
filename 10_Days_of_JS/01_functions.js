/*
 * Create the function factorial here
 */

    // Recursive form
    function factorial(n) {
        if (n === 0) { return 1; }
        else { return n * factorial(n - 1); }
}
