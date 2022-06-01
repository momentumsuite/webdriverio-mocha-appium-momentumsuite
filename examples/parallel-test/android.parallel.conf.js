const allure = require('allure-commandline')

var commonCapabilities = {
    momentumUser: '<momentum-suite-username>', //MOMENTUMSUITE_USERNAME
    momentumToken: '<momentum-suite-access-key>', //MOMENTUMSUITE_ACCESS_KEY
    app: '<hashed-app-id>', //MOMENTUMSUITE_APP_ID ms://<hashed-app-id>
    //app: 'https://momentumsuite.com/downloads/My-Bank-Wallet-v1.apk',
    maxInstances: 10,
    platformName: 'Android',
    automationName: 'UiAutomator2',
    autoGrantPermissions: true,
    language: 'en',
    locale: 'en',
    fullReset: true,
    noReset: false,
    udid: ''
}

exports.config = {
    hostname: 'momentumv2.mobven.com',
    port: 8088,
    path: '/wd/hub/',
    protocol: 'http',
    specs: [
        './examples/parallel-test/specs/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        momentumGw: '4033', //MOMENTUMSUITE_DEVICE_ID
        ...commonCapabilities
    },
    {
        momentumGw: '<momentum-suite-device-id>', //MOMENTUMSUITE_DEVICE_ID
        ...commonCapabilities
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
