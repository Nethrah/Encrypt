cordova.define("cordova-plugin-encrypt.encrypt", function(require, exports, module) {
var scrypt = function(successCallback, errorCallback, message, salt, options) {
    if (typeof errorCallback != "function")  {
        console.log("encryptPlugin.encrypt failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("encryptPlugin.encrypt failure: success callback parameter must be a function");
        return;
    }
    options = options || {};
    cordova.exec(successCallback, errorCallback, "encryptPlugin", "encrypt", [message, salt, options]);
};


if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.eencrypt) {
    window.plugins.encrypt = scrypt;
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = encrypt;
}
});
