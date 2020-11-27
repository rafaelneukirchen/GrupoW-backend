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
var express_1 = require("express");
var LoginUserService_1 = __importDefault(require("../services/LoginUserService"));
var user_routes_1 = require("./user.routes");
var loginRoute = express_1.Router();
loginRoute.post('/', function (request, response) {
    var _a = request.body, email = _a.email, password = _a.password;
    var loginUserService = new LoginUserService_1.default(user_routes_1.userRepository);
    var user = loginUserService.execute({ email: email, password: password });
    if (user) {
        return response.json(__assign(__assign({}, user), { password: '' }));
    }
    return response.status(400).json({ message: 'Check your credentials' });
});
exports.default = loginRoute;
