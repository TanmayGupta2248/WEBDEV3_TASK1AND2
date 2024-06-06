const fs = require('fs');
const path = require('path');

// Get the string to search for from the command-line arguments
const searchString = process.argv[2];

if (!searchString) {
  console.error('Please provide a string to search for.');
  process.exit(1);
}

// Define the file path
const filePath = path.join(__dirname, 'sample.txt');

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  // Check if the search string exists in the file
  const exists = data.includes(searchString);
  console.log(exists);
});
