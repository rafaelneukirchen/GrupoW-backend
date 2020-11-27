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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../models/User"));
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.users = [];
    }
    UserRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email, password = _a.password;
        var user = new User_1.default({ name: name, email: email, password: password });
        this.users.push(user);
        return user;
    };
    UserRepository.prototype.getUsers = function () {
        return this.users;
    };
    UserRepository.prototype.setAvatar = function (_a) {
        var id = _a.id, avatar = _a.avatar;
        var i = -1;
        var user = this.users.filter(function (u, index) {
            if (u.id === id) {
                i = index;
            }
            return u.id === id;
        })[0];
        var userWithAvatar = __assign(__assign({}, user), { avatar: avatar });
        if (i > -1) {
            this.users[i] = userWithAvatar;
        }
        else {
            throw new Error('User not exist.');
        }
        return userWithAvatar;
    };
    return UserRepository;
}());
exports.default = UserRepository;
