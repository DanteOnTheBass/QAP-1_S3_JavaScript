// Importing the 'path' module to work with file paths
const path = require('path');

// Importing the 'fs' module for file system operations
const fs = require('fs');

// Creating a file path by joining the current directory (__dirname) with the filename 'PathExample.txt'
const filePath = path.join(__dirname, 'PathExample.txt');
console.log('File path:', filePath);

// Reading the content of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  // Check for errors during file reading
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Displaying the content of the file
  console.log('File content:\n', data);
});

// Extracting the file name from the complete file path
const fileName = path.basename(filePath);
console.log('File name:', fileName);

// Checking if the file path is an absolute path
const isAbsolute = path.isAbsolute(filePath);
console.log('Is absolute path:', isAbsolute);
