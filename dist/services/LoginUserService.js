"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginUserService = /** @class */ (function () {
    function LoginUserService(userRepository) {
        this.userRepository = userRepository;
    }
    LoginUserService.prototype.execute = function (_a) {
        var email = _a.email, password = _a.password;
        var users = this.userRepository.getUsers();
        return users.filter(function (u) { return u.email === email && u.password === password; })[0];
    };
    return LoginUserService;
}());
exports.default = LoginUserService;
