"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = require("../routes/user.routes");
var PostRepository = /** @class */ (function () {
    function PostRepository() {
        this.posts = [];
    }
    PostRepository.prototype.getAll = function () {
        var posts_return = this.posts.map(function (p) {
            var user_temp = user_routes_1.userRepository
                .getUsers()
                .filter(function (u) { return u.id === p.user.id; })[0];
            return __assign(__assign({}, p), { user: __assign(__assign({}, user_temp), { password: '' }) });
        });
        return posts_return;
    };
    PostRepository.prototype.addPost = function (post) {
        this.posts.push(post);
        return post;
    };
    return PostRepository;
}());
exports.default = PostRepository;
