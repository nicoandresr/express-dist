"use strict";
var express = require('express');
var ServeDist = (function () {
    function ServeDist(_port, _config) {
        this._port = _port;
        this._config = _config;
        this._msgConsoleStartApp = "App listening on port: ";
        this._app = express();
        this.setupExpressServer();
    }
    ServeDist.prototype.setupExpressServer = function () {
        var _this = this;
        this._app.use("/", express.static("dist"));
        if (this._config) {
            this._app.get("/config", function (req, res) { res.send(_this._config); });
        }
        this._app.listen(this._port, function () { return console.log(_this.getInitialMsg()); });
    };
    ServeDist.prototype.getInitialMsg = function () {
        return this._msgConsoleStartApp + this._port;
    };
    return ServeDist;
}());
exports.ServeDist = ServeDist;
exports.__esModule = true;
exports["default"] = ServeDist;
