# WebdriverIO Mocha Appium Momentumsuite
![image](https://user-images.githubusercontent.com/105457661/171344591-02737e7e-f1db-4192-8c3b-e202f4eb5fab.png)
WebdriverIO Integration with local or Momentum Suite real mobile farm devices

## Supports
  * Native or Hybrid Android and iOS apps (APK, AAB, IPA)
  * Chrome mobileweb testing on Android devices
  * Safari mobileweb testing on iOS devices
  * Page Object Model (POM) usage with wdio
  * Example BDD scenarios with Cucumber.js and wdio
  * Testing with multiple files
  * Parallel testing on multi mobile devices
  * Local testing or using Momentum Suite's 150+ Android or iOS devices
  * Auto generated HTML Allure test report after test
  * Take screenshot on test failure

## Setup

**Requirements:**

WebdriverIO v7 requires Node.js version 14 or higher. If you don't have Node installed, download it from [here](https://nodejs.org/en/).

**Install the dependencies:**

Run the following command in project's base directory :
```
npm i
```

## Getting Started
Getting Started with Appium tests using WebdriverIO on Momentum Suite couldn't be easier!
With a Momentum Suite account, You need 4 things to start without any Appium or Android SDK dependencies.
  * Momentum Suite username: Usually it could be your email address
  * Momentum Suite access key: Your unique access token learned from moemntumsuite.com
  * Momentum Suite device id(s): Mobile device ID information to run the test. It's a 4 digit number.
  * Momentum Suite app id: Your uploaded IPA, APK or AAB app file from Momentum Suite Application Library. Example format is ms://<hashed-app-id>
 
 Do not forget to check hostname, port, path and protocol values on your conf.js file.

**Start with Android device:**
 Open for editing your android.first.conf.js file under /examples/getting-started directory.
 
 Set momentumUser, momentumToken, momentumGw and app capabilities.
 
 Test script is available in getting-started directory
 
 Run the following command in project's base directory :
```
npm run android-first
```


**Start with iOS device:**
Same with Android, but need to change ios.first.conf.js file.
 
Run the following command in project's base directory :
```
npm run ios-first
```
 

**Start with local testing:**
Use Local testing that access resources hosted in your development or testing environments. You need to install Appium and it's all dependencies like Android SDK, Xcode, Command Line tools. At the same sime you will need to run a real device or simulator/emulator.  Do not forget to check hostname, port, path and protocol values on your conf.js file with your own Appium server.
 
Run the following command in project's base directory :
```
npm run android-local
```
 
 **All commands to start mobile tests:**
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
 
 
