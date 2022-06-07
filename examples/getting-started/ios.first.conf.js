const allure = require('allure-commandline');
const {DATA} = require('../../test-settings.js');

exports.config = {
    hostname: DATA.CLOUD['momentumsuite.hostname'],
    port: DATA.CLOUD['momentumsuite.port'],
    path: DATA.CLOUD['momentumsuite.path'],
    protocol: DATA.CLOUD['momentumsuite.protocol'],
    specs: [
        './examples/getting-started/specs/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        momentumUser: DATA.CLOUD['momentumsuite.user'],
        momentumToken: DATA.CLOUD['momentumsuite.token'],
        momentumGw: DATA.CLOUD['momentumsuite.deviceList'][0],
        app: DATA.CLOUD['momentumsuite.appPath'],
        maxInstances: 1,
        platformName: 'iOS',
        automationName: 'XCUITest',
        autoAcceptAlerts: true,
        language: 'en',
        locale: 'en',
        fullReset: true,
        noReset: false,
        deviceName: '',
        udid: ''
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
