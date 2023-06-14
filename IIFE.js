(function() {
    var message = 'Hello, IIFE!';
    console.log(message);
  })();
  
  // Output: Hello, IIFE!
  
    
  /*  In this example, we define an anonymous function and immediately invoke it using parentheses 
  (function() { ... })(). This is an IIFE because the function is enclosed within parentheses and is
   immediately invoked by adding another pair of parentheses () at the end.

Inside the IIFE, we define a variable message with the value 'Hello, IIFE!'. Then, we log the value
 of message to the console using console.log().

Since the IIFE is immediately invoked, the code inside it is executed right away. As a result, the
 output to the console is "Hello, IIFE!".

IIFEs are often used to create a local scope, preventing variable name conflicts with the global 
scope and providing encapsulation for variables and functions. */