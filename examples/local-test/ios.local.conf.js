const allure = require('allure-commandline');
const {DATA} = require('../../test-settings.js');

exports.config = {
    hostname: DATA.LOCAL.hostname,
    port: DATA.LOCAL.port,
    path: DATA.LOCAL.path,
    protocol:  DATA.LOCAL.protocol,
    specs: [
        './examples/local-test/specs/iOS/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: "iOS",
        "appium:deviceName": DATA.LOCAL.deviceName,
        "appium:app": DATA.LOCAL.app,
        "appium:automationName": "XCUITest",
        "appium:autoAcceptAlerts": true,
        "appium:language": "en",
        "appium:locale": "en",
        "appium:fullReset": true,
        "appium:noReset": false
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    framework: 'mocha',
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
