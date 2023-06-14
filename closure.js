function outerFunction() {
    var outerVariable = 'I am outside!';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  var closureExample = outerFunction();
  closureExample(); // Output: "I am outside!"
  