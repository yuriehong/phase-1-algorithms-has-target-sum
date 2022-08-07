function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
     let sum = target -array[i];
     for(let j = i+1; j <array.length; j++){
      if (array[j] == sum){
        return true;
      }
     }
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
  nested for loop so it's O(n^2)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Checking for every number in the array if any number after it can add up to the target.
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

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 5, 0, 7], 12));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 30));

  console.log("");
}

module.exports = hasTargetSum;
