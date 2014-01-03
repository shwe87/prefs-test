var prefs = require("sdk/simple-prefs");
var panel = require("./panelControl.js");
var panelMessage = panel.Panel();

function onPrefChange(prefName) {
    console.log("Device name set to " + prefs.prefs['deviceName']);
    var message = {"msg":"Device name set to " + prefs.prefs['deviceName'],'type':'correct'};
    panelMessage.write(message);
    panelMessage.show();
    
}
prefs.on("extraServer", onPrefChange);
prefs.on("saveDeviceName",onPrefChange);


