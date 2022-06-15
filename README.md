# WebdriverIO Mocha Appium Momentumsuite
![image](https://user-images.githubusercontent.com/105457661/171344591-02737e7e-f1db-4192-8c3b-e202f4eb5fab.png)
[WebdriverIO](https://webdriver.io/) Integration with local or [Momentum Suite](https://www.momentumsuite.com/) real mobile farm devices

## Supports
  * Native or Hybrid Android and iOS apps (APK, AAB, IPA)
  * Chrome mobileweb testing on Android devices
  * Safari mobileweb testing on iOS devices
  * Page Object Model (POM) usage with [wdio](https://webdriver.io/)
  * Example BDD scenarios with [cucumber.js](https://github.com/cucumber/cucumber-js) and wdio
  * Testing with multiple files
  * Parallel testing on multi mobile devices
  * Local testing or using Momentum Suite's 150+ Android or iOS devices
  * Auto generated HTML [Allure](https://docs.qameta.io/allure/) test report after test
  * Take screenshot on test failure

## Setup

**Requirements:**

* WebdriverIO v7 requires Node.js version 14 or higher. If you don't have Node installed, download it from [here](https://nodejs.org/en/).
* Install the [Allure command-line tool](https://www.npmjs.com/package/allure-commandline), and process the results directory after test run.

**Install the dependencies:**

Run the following command in project's base directory :
```
npm i
```

## Getting Started
Getting Started with Appium tests using WebdriverIO on Momentum Suite couldn't be easier!
With a Momentum Suite account, You need 4 things to start without any Appium or Android SDK dependencies.
  * **momentum:user** Usually it could be your email address
  * **momentum:token** Your unique access token learned from momentumsuite.com
  * **momentum:gw** Comma seperated Momentum Suite mobile device ID list (4 digit number) to run the test. First number will be your default phone for all except parallel-testing.
  * **appium:app** Your uploaded IPA, APK or AAB app file from Momentum Suite Application Library. Example format is ms://<hashed-app-id> Optionally you can use a public accessible web URL.
 
 Do not forget to set these 4 Appium capability values and check hostname, port, path and protocol values on your **test-settings.js** file.

**Start with Android device:**
 Open for editing your test-settings.js file under [root directory](https://github.com/momentumsuite/webdriverio-mocha-appium-momentumsuite/tree/main/test-settings.js).
 
 Set momentum.user, momentum.token, momentum.deviceList, momentum.app on test-settings.js file.
 
 Test script is available in getting-started directory
 
 Run the following command in project's base directory :
```
npm run android-first
```


**Start with iOS device:**
Same with Android, but need to change test-settings.js file.
 
Run the following command in project's base directory :
```
npm run ios-first
```
 

**Start with local testing:**
Use Local testing that access resources hosted in your development or testing environments. You need to install Appium and it's all dependencies like Android SDK, Xcode, Command Line tools. At the same sime you will need to run a real device or simulator/emulator.  Do not forget to check hostname, port, path and protocol values on your test-settings.js file with your own Appium server.
 
Run the following command in project's base directory :
```
npm run android-local
```
 
 **All available commands to start mobile testing:**
 ```
 npm run android-first
 npm run android-parallel
 npm run android-local
 npm run android-pom
 npm run android-cucumber
 npm run android-multiple
 npm run android-chrome
 npm run ios-first
 npm run ios-parallel
 npm run ios-local
 npm run ios-pom
 npm run ios-cucumber
 npm run ios-multiple
 npm run ios-safari
```
 
**Appium Inspector usage with Momentum Suite devices:**
 
![image](https://user-images.githubusercontent.com/105457661/173579734-ae2ceae2-70c1-4c00-b58d-cdf81c0b29ef.png)

 
**Allure Reporting**
 
 Run the following command in project's base directory after test run has been completed. This command will open a browser window with HTML test results.
```
allure open
```

## Getting Help
If you are running into any issues or have any queries, please check [Momentum Suite Contact page](https://www.momentumsuite.com/contact/) or get in touch with us.
