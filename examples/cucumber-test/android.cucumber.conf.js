const allure = require('allure-commandline')

exports.config = {
    hostname: 'momentumv2.mobven.com',
    port: 8088,
    path: '/wd/hub/',
    protocol: 'http',
    specs: [
        './examples/cucumber-test/features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        momentumUser: '<momentum-suite-username>', //MOMENTUMSUITE_USERNAME
        momentumToken: '<momentum-suite-access-key>', //MOMENTUMSUITE_ACCESS_KEY
        momentumGw: '<momentum-suite-device-id>', //MOMENTUMSUITE_DEVICE_ID
        app: '<hashed-app-id>', //MOMENTUMSUITE_APP_ID ms://<hashed-app-id>
        //app: 'https://momentumsuite.com/downloads/My-Bank-Wallet-v1.apk',
        maxInstances: 1,
        platformName: 'Android',
        automationName: 'UiAutomator2',
        autoGrantPermissions: true,
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
