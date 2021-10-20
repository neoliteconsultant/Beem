### About
A Node.js REST API for Mobile Country Codes (MCC) and Mobile Network Codes (MNC).


   

### Prerequistes
Before you use this application, ensure that the following tools are installed

* Node v10.12.0 or later.


### Usage
Navigate to the project root in a command line and execute the following commands.

1. Install dependencies

    `
    $ npm install
    `

2. Then execute the following command:

    `
    $ node app.js 
    `

    This will fire up Express JS, the server application used to serve Node JS.It has been set to run on port 3080


3. Look up the network name and country by specifying mcc and mnc

   http://localhost:3080/v1/network?mcc=412&mnc=80
  

4. Look up the networks in a specific country based on mcc

   http://localhost:3080/v1/network/country?mcc=640

5. Look up the networks in a specific country based on country name

   http://localhost:3080/v1/network/country?countryName=Mexico

### Running tests
To run tests navigate to the project root in a command line then execute:

    `
    $ npm test
    `

