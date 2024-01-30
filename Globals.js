// Set a global variable
global.myGlobalVariable = 'I am a global variable!';

// Access the global variable from another module
console.log('Global variable from another module:', myGlobalVariable);

// Use setTimeout globally
setTimeout(() => {
  console.log('This function is globally accessible.');
}, 1000);

// Access __filename and __dirname globally

// __filename represents the current filename, including the full path.
console.log('Current filename:', __filename);

// __dirname represents the current directory path where the script resides.
console.log('Current directory:', __dirname);

// Since 'implicitGlobalVariable' is not declared with 'var', 'let', or 'const',
// it becomes a property of the globals object and is accessible globally.
implicitGlobalVariable = 'I am an implicit global variable!';

// Access the implicit global variable from another module
console.log('Implicit global variable from another module:', implicitGlobalVariable);

// Function to encapsulate variables and avoid polluting the global scope
(function () {
  // Local variable to avoid global pollution
  const localVariable = 'I am a local variable!';

  // Access local variable
  console.log('Local variable:', localVariable);

  // Global variable is not accessible here
  // console.log('Global variable:', myGlobalVariable);
})();

// Global variable is accessible here
console.log('Global variable outside of a function:', myGlobalVariable);
