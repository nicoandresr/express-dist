"use strict";
var express = require("express");
var PublishDist = (function () {
    function PublishDist(_port) {
        this._port = _port;
        this._msgConsoleStartApp = "App listening on port: ";
        this._app = express();
        this.setupExpressServer();
    }
    PublishDist.prototype.setupExpressServer = function () {
        var _this = this;
        this._app.use("/", express.static("dist"));
        this._app.listen(this._port, function () { return console.log(_this.getInitialMsg()); });
    };
    PublishDist.prototype.getInitialMsg = function () {
        return this._msgConsoleStartApp + this._port;
    };
    return PublishDist;
}());
exports.publishDist = function (port) { return new PublishDist(port); };
