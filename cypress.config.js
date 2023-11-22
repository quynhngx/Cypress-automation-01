const { defineConfig } = require('cypress')
const {
    addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')
const {
    preprocessor,
} = require('@badeball/cypress-cucumber-preprocessor/browserify')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await addCucumberPreprocessorPlugin(on, config)

    config.db = {
        userName: "quynhng01",
        password: "Potato0201",
        server: "quynhngautomation.database.windows.net",
        options: {
            database: "quynhngcypress",
            encrypt: true,
            rowCollectionOnRequestCompletion : true
        }
    }
    on('file:preprocessor', preprocessor(config));

    tasks = sqlServer.loadDBPlugin(config.db);
    on('task', tasks);

    on('task',
    {
        ExceltoJsonConverter(filePath)
        {
            const result = excelToJson({
            source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
            });
        return result;
        }
    })

   
    // on(
    //     'file:preprocessor',
    //     createBundler({
    //         plugins: [createEsbuildPlugin(config)],
    //     }),
    // )

    // Make sure to return the config object as it might have been modified by the plugin.
    return config
}

module.exports = defineConfig({
    projectId: 'yh67ny',
    defaultCommandTimeout: 6000,
    downloadsFolder: 'cypress/downloads',
    env: {
        url: 'https://rahulshettyacademy.com',
    },
    retries: {
        runMode: 0,
    },
    //load all the plugins before you run any test
    e2e: {
        specPattern: 'cypress/integration/examples/*.js',
        setupNodeEvents,
    },
})
