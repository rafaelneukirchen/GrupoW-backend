"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUserService = /** @class */ (function () {
    function CreateUserService(userRepository) {
        this.userRepository = userRepository;
    }
    CreateUserService.prototype.execute = function (_a) {
        var email = _a.email, name = _a.name, password = _a.password, password_confirm = _a.password_confirm;
        if (!email || !password || !password_confirm || !name) {
            throw new Error('Missing fields.');
        }
        if (password !== password_confirm) {
            throw new Error('The passwords do not match.');
        }
        var exist = this.userRepository.getUsers().filter(function (u) { return u.email === email; });
        if (exist[0]) {
            throw new Error('E-mail already registered ');
        }
        var user = this.userRepository.create({ name: name, email: email, password: password });
        return user;
    };
    return CreateUserService;
}());
exports.default = CreateUserService;
