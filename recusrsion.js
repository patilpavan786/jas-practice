function countdown(n) {
    if (n <= 0) {
      console.log("Done!");
    } else {
      console.log(n);
      countdown(n - 1);
    }
  }
  
  // Example usage:
  countdown(5);
  