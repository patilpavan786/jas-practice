var person = {
  name: "John",
  greet: function (message, punctuation) {
    console.log(message + " " + this.name + punctuation);
  },
};

var anotherPerson = {
  name: "Jane",
};

person.greet("Hello", "!"); // Output: Hello John!
person.greet.call(anotherPerson, "Hi", "!"); // Output: Hi Jane!
person.greet.apply(anotherPerson, ["Hey", "!"]); // Output: Hey Jane!
var boundFunction = person.greet.bind(anotherPerson, "Hola", "!");
boundFunction(); // Output: Hola Jane!

/*  In this example, we have an object person with a greet method that logs a message along with the name
   property of the object.

person.greet('Hello', '!') directly invokes the greet method on the person object and logs "Hello John!"
 to the console.

person.greet.call(anotherPerson, 'Hi', '!') uses the call method to invoke the greet method on the 
anotherPerson object, passing the object as the first argument, followed by the individual arguments 
"Hi" and "!". This call sets this inside the greet method to refer to the anotherPerson object, resulting 
in "Hi Jane!" being logged to the console.

person.greet.apply(anotherPerson, ['Hey', '!']) uses the apply method, which is similar to call, but 
accepts an array of arguments instead. Here, it invokes the greet method on the anotherPerson object 
with the arguments "Hey" and "!". Like call, apply sets this to anotherPerson, resulting in "Hey Jane

!" being logged.

person.greet.bind(anotherPerson, 'Hola', '!') uses the bind method to create a new function boundFunction 
that binds anotherPerson as the this value inside the greet method and sets the initial arguments as 
"Hola" and "!". The bind method does not invoke the function immediately but returns a new function 
that can be invoked later. When we call boundFunction(), it logs "Hola Jane!" to the console.

These methods (call, apply, and bind) allow us to control the value of this inside a function and pass
 arguments explicitly.    */
