const allure = require('allure-commandline');
const {DATA} = require('../../test-settings.js');

var remoteDebugProxy =  DATA.CLOUD['momentum.deviceList'][0] + 2000;
var remoteDebugProxys = remoteDebugProxy.toString();

exports.config = {
    hostname: DATA.CLOUD['momentum.hostname'],
    port: DATA.CLOUD['momentum.gw'],
    path: DATA.CLOUD['momentum.path'],
    protocol: DATA.CLOUD['momentum.protocol'],
    specs: [
        './examples/safari-test/specs/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: "iOS",
        "appium:automationName": "XCUITest",
        "appium:autoAcceptAlerts": true,
        "appium:browserName": "Safari",
        "appium:language": "en",
        "appium:locale": "en",
        "appium:deviceName": "",
        "appium:udid": "",
        "appium:remoteDebugProxy": remoteDebugProxys,
        "momentum:options": {
            "user": DATA.CLOUD['momentum.user'],
            "token": DATA.CLOUD['momentum.token'],
            "gw": DATA.CLOUD['momentum.deviceList'][0]
        }
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
