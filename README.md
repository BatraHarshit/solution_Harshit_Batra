### solution_Harshit_Batra

### JavaScript Assignment

node, npm and javascript is used for creating this solution.

### Requirements

Given an array of clicks, return the subset of clicks where:

1. For each IP within each one hour period, only the most expensive click is placed into the
   result set.
2. If more than one click from the same IP ties for the most expensive click in a one hour
   period, only place the earliest click into the result set.
3. If there are more than 10 clicks for an IP in the overall array of clicks, do not include any
   of those clicks in the result set.
   The result set should be stored in an array of objects. Each object should represent a click. The
   expected result set should be a subset of the original array.

### Prerequisites

Please make sure that NODE is installed on the device where this code needs to be run. NPM will be used to execute the commands from shell/terminal.

#### Test Cases

Mocha is used for writing the test cases. Test cases are written only on basic level for now.

### List of Files Used

1.  `index.js` - The main file that will execute the code and call the required functions with the provided clicks data (`clicks.json`).
2.  `findSubset.js` - Main logic function, that accepts the `clicks` array as an argument and return the resulted subset.
3.  `saveResultFile.js` - Saves the array recieved as argument to the `result-set.json` file.
4.  `test.js` - Executes test cases.
5.  `test_inputs.js` - Holds the Test file's input and output data.
6.  `result-set.json` - Stores the final output in the JSON format.

### Installation Process

First, unzip the folder and open the terminal on the extracted folder.
Second, use the package manager 'npm' to install all the required packages, using command npm i or npm install in the terminal.

### Running the code

Command to run the solution:
npm run solution

Command to run the test cases:
npm run test
