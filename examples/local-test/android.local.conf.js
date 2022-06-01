const allure = require('allure-commandline')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub/',
    protocol: 'http',
    specs: [
        './examples/local-test/specs/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        deviceName: 'emulator-5554',
        app: 'https://momentumsuite.com/downloads/My-Bank-Wallet-v1.apk',
        //app: '<hashed-app-id>',
        maxInstances: 5,
        platformName: 'Android',
        automationName: 'UiAutomator2',
        autoGrantPermissions: true,
        language: 'en',
        locale: 'en',
        fullReset: true,
        noReset: false
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
