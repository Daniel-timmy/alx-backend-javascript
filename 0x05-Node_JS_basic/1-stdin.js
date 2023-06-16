const readline = require('readline')
const rInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rInput.question('Welcome to Holberton School, what is your name?\n', (rName) => {
    console.log(`Your name is: ${rName}`);
    console.log('This important software is now closing');
    rInput.close();
});
