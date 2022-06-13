const allure = require('allure-commandline');
const {DATA} = require('../../test-settings.js');

var deviceCount = DATA.CLOUD['momentum.deviceList'].length;
var finalCapsText = "[";
for (let i = 0; i < deviceCount; i++) {
    finalCapsText += "{ \"momentum:gw\": " + DATA.CLOUD['momentum.deviceList'][i] + "," +
    "\"platformName\": \"Android\"," +
    "\"momentum:user\": \"" + DATA.CLOUD['momentum.user'] + "\"," +
    "\"momentum:token\": \"" + DATA.CLOUD['momentum.token'] + "\"," +
    "\"appium:app\": \"" + DATA.CLOUD['momentum.app'] + "\"," +
    "\"appium:automationName\": \"UiAutomator2\"," +
    "\"appium:autoGrantPermissions\": true," +
    "\"appium:language\": \"en\"," +
    "\"appium:locale\": \"en\"," +
    "\"appium:fullReset\": true," +
    "\"appium:noReset\": false," +
    "\"appium:deviceName\": \"\"," +
    "\"appium:udid\": \"\"" +
    "}";
    if (!((deviceCount-1)==i)) { finalCapsText +=","};
  }
finalCapsText +="]";

console.log("Total device count: " + deviceCount);
const finalCapsArrayList = JSON.parse(finalCapsText);

exports.config = {
    hostname: DATA.CLOUD['momentum.hostname'],
    port: DATA.CLOUD['momentum.port'],
    path: DATA.CLOUD['momentum.path'],
    protocol: DATA.CLOUD['momentum.protocol'],
    specs: [
        './examples/parallel-test/specs/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: finalCapsArrayList,
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
                20000)

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
