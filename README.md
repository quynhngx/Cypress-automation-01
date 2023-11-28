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

Visual Studio Code, also commonly referred to as VS Code, is a source-code editor developed by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

Download VS Code
    - Link (https://code.visualstudio.com/download)


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

Cypress Test Runner is a graphical user interface (GUI) that allows you to easily visualize and debug your tests. It provides a dashboard with a list of your tests and a test runner window that displays the commands and results of each test, and a browser window that shows the application being tested.

**Commands for opening Cypress**
```sh
node_modules/.bin/cypress open
```
OR
```sh
npx cypress open
```

**Commands for running Cypress on browser/headless mode**
```sh
npx cypress run --headless //run on headless mode
```

```sh
npx cypress run --headed --browser chrome //run on Chrome browser for example
```

**Command for running all the files**
```sh
npx cypress run --headed --browser chrome
```
**NOTE**: Remember to config the spec pattern in cypress.config.js file first, for example you want to run all the files with extension `.js` in cypress\integration\examples folder, config inside the section `e2e`

```sh
e2e:{
    specPattern: 'cypress/integration/examples/*.js'
}
```

**Command for running specific file (not all the files)**
```sh
npx cypress run --spec "cypress/e2e/examples/actions.cy.js" --headed --browser chrome //paste the relative path of the file inside the double quote ""
```
#### 2.4/ Setup Cypress Cloud and record tests 

Cypress Cloud is a place where tester can view and debug past test results from your CI environment, analyze and diagnose test health.

***Setup Cypress Cloud***

- Open Cypress Runner
- Login by choosing the username icon at the top right corner
- Create a project
- Add project ID in config.file.js file
 
```sh
module.exports = {
projectID: "ngijqu" //projectID here is just an example
}
```

***Record tests via command***
```sh
npx cypress run --record --key 359d1830-a95f-441b-8695-2b7981fba90a //key is generated by Cypress Cloud after you created project there
```

### 3/ Find CSS locators when writing Cypress tests

In CSS, selectors are patterns used to select the element(s) you want to style. Selectors are important it will help Cypress finds exact element which tester wants to interact with.

There are several ways to detect CSS locators

***If an element has an ID***
```sh
cy.get('#idname') //with hash(#) icon before idname
```

***If an element has class name***
```sh
cy.get('.classname') //with dot(.) icon before classname
```

If many CSS seletors have the same classname, so differentiate them with tagname beforehand
```sh
cy.get('tagname.classname') //with dot(.) icon between the tagname and classname
```

***Customized with any attribute***
```sh
cy.get('tagname[attribute=value]') //with attribute and its value being blocked inside square brackets
```

***Travel the tagname from parent to child to get the item***
```sh
cy.get('ParentTagName ChildTagName') //with space( ) between Parent and Child
```

***Selects every `p` element that is the numberth child of its parent***
```sh
cy.get('a p:nth-child(2)') //Selects every <p> element that is the second child of its parent a
```

***Selects every `p` element that is the numberth child of its parent, counting from the last child***
```sh
cy.get('a p:nth-last-child(2)') //Selects every <p> element that is the second child of its parent a, counting from the last child
```

**NOTE**: You can add extension ChroPath or SelectorsHub to the browser to verify CSS selectors first to see how many elements matching with selectors OR you can take advantage of Cypress Runner to inspect the elements but it is not recommended.




  
          
          

  

