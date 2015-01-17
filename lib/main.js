(function () {
    var buttons = require('sdk/ui/button/action');
    var tabs = require("sdk/tabs");
    var self = require("sdk/self");
    var pageMod = require("sdk/page-mod");

    buttons.ActionButton({
        id: "nogame-ext-button",
        label: "Visit nogame.pl",
        icon: {
            "16": "./res/icon-16.png",
            "32": "./res/icon-32.png",
            "64": "./res/icon-64.png"
        },
        onClick: function (state) {
            tabs.open("http://nogame.pl/pl/c/PlayStation-4/140");
        }
    });

    pageMod.PageMod({
        include: "http://nogame.pl/pl/c/*",
        contentScriptFile: [self.data.url("jquery-2.1.3.min.js"), self.data.url("nogame-ext-script.js")],
        onAttach: function (worker) {
            worker.port.emit("modifyNogamePage", worker);
        }
    });
})();