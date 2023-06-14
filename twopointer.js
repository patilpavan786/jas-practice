function findPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      let currentSum = arr[left] + arr[right];
  
      if (currentSum === target) {
        return [arr[left], arr[right]]; // Found a pair with the target sum
      } else if (currentSum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  
    return null; // No pair found with the target sum
  }
  
  // Example usage:
  const array = [2, 3, 5, 9, 11];
  const target = 14;
  const pair = findPairWithSum(array, target);
  
  if (pair) {
    console.log(`Pair found: ${pair[0]}, ${pair[1]}`);
  } else {
    console.log("No pair found with the target sum");
  }
  