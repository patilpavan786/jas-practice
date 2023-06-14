function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return true; // target found
      } else if (arr[mid] < target) {
        left = mid + 1; // target is in the right half
      } else {
        right = mid - 1; // target is in the left half
      }
    }
  
    return false; // target not found
  }
  
  // Example usage:
  const array = [2, 4, 6, 8, 10, 12, 14, 16];
  const target = 10;
  const found = binarySearch(array, target);
  
  if (found) {
    console.log("Target found");
  } else {
    console.log("Target not found");
  }
  