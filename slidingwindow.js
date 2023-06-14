function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
  
    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
  
    maxSum = windowSum;
  
    // Slide the window and update the max sum
    for (let i = k; i < arr.length; i++) {
      windowSum = windowSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  // Example usage:
  const array = [2, 3, 5, 1, 6, 8, 9];
  const k = 3;
  const maxSum = maxSumSubarray(array, k);
  console.log(`Maximum sum of a subarray of length ${k} is ${maxSum}`);
  