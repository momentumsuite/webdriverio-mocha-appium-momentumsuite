const allure = require('allure-commandline');
const {DATA} = require('../../test-settings.js');

exports.config = {
    hostname: DATA.CLOUD['momentum.hostname'],
    port: DATA.CLOUD['momentum.port'],
    path: DATA.CLOUD['momentum.path'],
    protocol: DATA.CLOUD['momentum.protocol'],
    specs: [
        './examples/cucumber-test/features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: "Android",
        "momentum:user": DATA.CLOUD['momentum.user'],
        "momentum:token": DATA.CLOUD['momentum.token'],
        "momentum:gw": DATA.CLOUD['momentum.deviceList'][0],
        "appium:app": DATA.CLOUD['momentum.app'],
        "appium:automationName": "UiAutomator2",
        "appium:autoGrantPermissions": true,
        "appium:language": "en",
        "appium:locale": "en",
        "appium:fullReset": true,
        "appium:noReset": false,
        "appium:deviceName": "",
        "appium:udid": ""
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    framework: 'cucumber',
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        profile: [],
        require: [
            './examples/cucumber-test/steps/**/*.js'
        ],
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 20000,
        retry: 0
    },
    reporters: [
        [
          'allure',
          {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
          }
        ]
      ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
            await browser.closeApp();
            driver.deleteSession();   
        }
    },
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                15000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
