"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Post = /** @class */ (function () {
    function Post(_a) {
        var user = _a.user, text = _a.text;
        var created = new Date().toString();
        this.user = user;
        this.text = text;
        this.id = uuid_1.v4();
        this.created_at = created;
    }
    return Post;
}());
exports.default = Post;
