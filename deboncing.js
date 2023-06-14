function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  function search() {
    console.log('Searching...');
    // Perform search logic here
  }
  
  const debouncedSearch = debounce(search, 500);
  
  // Simulating search input events
  debouncedSearch(); // Will invoke search() after 500ms
  debouncedSearch(); // Will reset the timeout and invoke search() after another 500ms
  debouncedSearch(); // Will reset the timeout again
  