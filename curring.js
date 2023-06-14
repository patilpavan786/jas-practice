function add(x) {
    return function(y) {
      return function(z) {
        return function(w) {
          return x + y + z + w;
        };
      };
    };
  }
  
  const addFourNumbers = add(2)(3)(4)(5);
  console.log(addFourNumbers); // Output: 14
  