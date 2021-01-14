"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name, email = _a.email, password = _a.password;
        this.id = uuid_1.v4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = 'img_placeholder.png';
    }
    return User;
}());
exports.default = User;
