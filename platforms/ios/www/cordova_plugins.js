cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-encrypt.encrypt",
        "file": "plugins/cordova-plugin-encrypt/www/encrypt.js",
        "pluginId": "cordova-plugin-encrypt",
        "clobbers": [
            "encrypt"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
   // "cordova-plugin-scrypt": "2.1.2"
};
// BOTTOM OF METADATA
});
