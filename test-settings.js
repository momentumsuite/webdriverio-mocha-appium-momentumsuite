var DATA = {   
    CLOUD : {
       "momentum.user": "<momentum-suite-username>",
       "momentum.token": "<momentum-suite-access-key>",
       "momentum.app": "ms://<hashed-app-id>", 
       "momentum.hostname": "console.momentumsuite.com",
       "momentum.gw": 4033,
       "momentum.path": "/gateway/wd/hub/",
       "momentum.protocol": "https",
       "momentum.deviceList": [4033] //Comma seperated device list for parallel-test run
       },
   
   LOCAL : {
       "app": "https://momentumsuite.com/downloads/sample.apk",
       "hostname": "127.0.0.1",
       "port": 4723,
       "path": "/wd/hub/",
       "protocol": "http",
       "deviceName": "emulator-5554"
       }
   };
   
   exports.DATA = DATA;
