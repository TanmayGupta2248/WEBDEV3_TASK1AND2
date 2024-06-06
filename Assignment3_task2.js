const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle /number requests
app.get('/number', (req, res) => {
  res.send('Go to /number/:num to check if :num is/isn’t a palindrome');
});

// Route to handle /number/:num requests
app.get('/number/:num', (req, res) => {
  const num = req.params.num;

  if (isNaN(num)) {
    res.status(400).send('Invalid number');
    return;
  }

  const isPalindrome = checkPalindrome(num);

  if (isPalindrome === null) {
    res.status(400).send('The number is negative');
    return;
  }

  if (isPalindrome) {
    res.send(`${num} is a palindrome`);
  } else {
    res.send(`${num} isn't a palindrome`);
  }
});

// Function to check if a number is a palindrome
function checkPalindrome(num) {
  if (num < 0) {
    return null;
  }

  const strNum = num.toString();
  const reversedStrNum = strNum.split('').reverse().join('');
  return strNum === reversedStrNum;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
