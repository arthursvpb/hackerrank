

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {

    const largest = Math.max(...nums);
    let newArray = nums.filter(num => num != largest);
    const secondLargest = Math.max(...newArray);
  
    return secondLargest;
  }
  
  