/*
// Fundamental of bitwise operators
// https://www.youtube.com/watch?v=mesu75PTDC8

// 00000100
const read = 4;

// 00000010
const write = 2;

// 00000001
const execute = 1;

// if all permissions, the value will be 00000111
let myPermission = 0;

// Setting permissions
myPermission = myPermission | read | write;

// If true, you have read permission
// This will do
// 000000[1]10 -> myPermission
// 000000[1]00 -> read permission
// The output is true
let message = (myPermission & read) ? "Y" : "N";
console.log(message);

// This will do
// 00000011[0] -> myPermission
// 00000010[1] -> read permission
message = (myPermission & execute) ? "Y" : "N";
console.log(message);
*/


function getMaxLessThanK(n, k) {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}
