function hasTargetSum(array, target) {
  // the function should return true if any pair of numbers in the arry add up to the target.
  for (i = 0; i < array.length; i++) {
    let j = i + 1;
    for (j; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return true;
        }
    }
  }
  return false;
}

/*
  O(n^2)
*/

/* 
  iterate through array
  add first index to all other indices to compare to target
  add second index to all other... etc...
  if array[i] + array[j] === target return true
  else return false
*/

/*
  As we iterate through the first for loop, we are starting with each item in the array represented by index i. For each item starting at array[0] we are then iterating through another for loop where the index starts one higher than i represented by index j. This loop iterates through every remaining number in the array and compares it to a conditional in an if statement. This conditional asks if the item at array[i] is equal to the item at array[j]. If it is, then the funciton returns true. If it is not, then we go back to the first for loop and add +1 to i and j and check again. If we've iterated through all of the array[i] loop without returning true, then we return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
