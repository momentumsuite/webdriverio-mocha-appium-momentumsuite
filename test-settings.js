var DATA = {
    CLOUD : {
       "momentum.user": "<momentum-suite-username>",
       "momentum.token": "<momentum-suite-access-key>",
       "momentum.app": "ms://<hashed-app-id>", 
       "momentum.hostname": "momentumv2.mobven.com",
       "momentum.port": 8088,
       "momentum.path": "/wd/hub/",
       "momentum.protocol": "http",
       "momentum.deviceList": [momentum-suite-device-id] //Comma seperated device list for parallel-test run
       },
   
   LOCAL : {
       "appPath": "https://momentumsuite.com/downloads/My-Bank-Wallet-v1.apk",
       "appiumHostname": "127.0.0.1",
       "appiumPort": 4723,
       "appiumPath": "/wd/hub/",
       "appiumProtocol": "http",
       "deviceName": "emulator-5554"
       }
   };
   
   exports.DATA = DATA;