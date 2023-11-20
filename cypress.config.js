const { defineConfig } = require('cypress')
const {
    addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')
const {
    preprocessor,
} = require('@badeball/cypress-cucumber-preprocessor/browserify')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

async function setupNodeEvents(on, config) {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await addCucumberPreprocessorPlugin(on, config)

    on('file:preprocessor', preprocessor(config))

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
