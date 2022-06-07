var DATA = {
    CLOUD : {
       "momentumsuite.user": "<momentum-suite-username>",
       "momentumsuite.token": "<momentum-suite-access-key>",
       "momentumsuite.appPath": "ms://<hashed-app-id>", 
       "momentumsuite.hostname": "momentumv2.mobven.com",
       "momentumsuite.port": 8088,
       "momentumsuite.path": "/wd/hub/",
       "momentumsuite.protocol": "http",
       "momentumsuite.deviceList": [momentum-suite-device-id] //TODO: Comma seperated device list supports only 2 devices for parallel-test run
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