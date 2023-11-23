# Cypress-automation-begin
This is a repo where contains all the code for my first practice on automation project using Cypress framework.

## What I have learned
- [x] understand Cypress definition, its architecture and its benefits
- [x] how to install Node.js, VS Code, Cypress and set up project
- [x] know about Cypress Test runner
- [x] command lines for running Cypress, specifying which spec files to run, launching other browsers, recording tests to Cypress Cloud
- [x] find CSS locators to perform Cypress API when writing test
- [x] basic assertion in writing tests with Cypress
- [x] Cypress asynchronous nature and its promise handling
- [x] automation to handling alerts, popups, child windows
- [x] Cypress framework (how to retrieve data from Cypress fixtures, implement page objects, customed commands)
- [x] data-driven testing, retrieve data for testing from SQL database, CSV file, and Excel file
- [x] practice Cypress Cucumber practice integration
- [x] mock https request & response using Cypress intercept

## I/ Deep dive into each learning part ###
### 1/ What is Cypress? What is its architecture and its benefits? ####
- Definitions
    - Cypress framework is a JavaScript-based end-to-end testing framework. 
    - Cypress framework is a JavaScript-based end-to-end testing framework. 
    - Cypress is Frontend automation testing tool and it is built for web applications.
    - Cypress is built on Node.js and comes packaged as a npm module.
- Architecture: unlike other testing tool like Selenium/Protractor/Appium, Cypress operates by running inside the browser.
- Benefits:
    - It addresses the key pain point when testing
        - Automatically waits for commands & assertions before moving on.
        - Test edge testcases by mocking to server response (can also handle API validations).
        - Take snapshots when the test runs (before and after hitting Cypress command).
        - View videos of your entire tests execution.

### 2/ Install tools & dependencies
#### 2.1/ Install Node.js

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser

Download Node.js
  - Link (https://nodejs.org/en/download) to download Node.js and install it to your device after downloading

#### 2.2/ Install VS Code

#### 2.3/ Create a new Project with Package.json

Package.json file is a JSON file that exists at the root of a JavaScript/Node projects. It holds metadata relevant to the project and it is used for managing the project's dependencies.

***Steps to create it***
```sh
mkdir CypressAutomation //this command helps to create a new folder
cd CypressAutomation //this command helps you go inside the CypressAutomation folder
npm -i init //this command helps you to create package.json file and keep hitting Enter for receiving the default values
```

***Install Cypress and make an entry for it in package.json***
```sh
npm cypress install --save -dev
```

#### 2.3/ Knows about Cypress Runner
**Commands for opening Cypress**
```sh
node_modules/.bin/cypress open
```
OR
```sh
npx cypress open
```
          
  
          
          

  

