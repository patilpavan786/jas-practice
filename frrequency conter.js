// function frequencyCounter(arr) {
//     const counter = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       counter[element] = (counter[element] || 0) + 1;
//     }
//     return counter;
//   }
//   const array = [1, 2, 3, 2, 1, 3, 3, 4, 4, 4];
//   const result = frequencyCounter(array);
//   console.log(result);
  

//   function frequencyCounter(arr) {
//     const counter = new Map();
  
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       counter.set(element, (counter.get(element) || 0) + 1);
//     }
  
//     return counter;
//   }
  
//   const array = [1, 2, 3, 2, 1, 3, 3, 4, 4, 4];
//   const result = frequencyCounter(array);
//   console.log(result);
  

function frequencyCounter(arr) {
    // Step 1: Create a new Map object to store frequencies
    const counter = new Map();
  
    // Step 2: Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
  
      // Step 3: Check if the element already exists in the map
      if (counter.has(element)) {
        // Step 4a: If the element exists, increment its frequency by 1
        counter.set(element, counter.get(element) + 1);
      } else {
        // Step 4b: If the element doesn't exist, set its frequency to 1
        counter.set(element, 1);
      }
    }
  
    // Step 5: Return the map containing frequencies
    return counter;
  }
  
  const array = [1, 2, 3, 2, 1, 3, 3, 4, 4, 4];
  const result = frequencyCounter(array);
  console.log(result);
  