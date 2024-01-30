
// Getting information about the operating system
const os = require('os');

// User information
const userInfo = os.userInfo();
console.log('User Info:', userInfo);

// Getting information about the operating system

// Type of the operating system (e.g., 'Linux', 'MacOS', 'Windows_NT')
console.log('OS Type:', os.type());

// Platform of the operating system (e.g., 'darwin', 'win32', 'linux')
console.log('OS Platform:', os.platform());

// CPU architecture of the operating system (e.g., 'x64', 'arm64', 'ppc64')
console.log('OS Architecture:', os.arch());

// Release version of the operating system 
console.log('OS Release:', os.release());


// CPU information
const cpus = os.cpus();
console.log('CPU Model:', cpus[0].model);          // Model of the first CPU/core
console.log('CPU Speed:', cpus[0].speed + ' MHz'); // Speed of the first CPU/core
console.log('Number of CPUs:', cpus.length);       // Total number of CPUs/cores


// Memory information
console.log('Total Memory:', (os.totalmem() / (1024 * 1024)).toFixed(2) + ' MB'); // Total system memory in MB
console.log('Free Memory:', (os.freemem() / (1024 * 1024)).toFixed(2) + ' MB');   // Free system memory in MB

// Additional comments explaining the conversion from bytes to megabytes
// Bytes to Kilobytes: 1 Kilobyte (KB) is equal to 1024 bytes.
// Kilobytes to Megabytes: 1 Megabyte (MB) is equal to 1024 Kilobytes.
// So, 1024 * 1024 converts it to megabytes (MB)

// Network interfaces
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);
