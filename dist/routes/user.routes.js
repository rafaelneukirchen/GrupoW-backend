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
exports.userRepository = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../config/upload"));
var UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
var CreateUserService_1 = __importDefault(require("../services/CreateUserService"));
var UpdateAvatarUserService_1 = __importDefault(require("../services/UpdateAvatarUserService"));
var usersRouter = express_1.Router();
exports.userRepository = new UserRepository_1.default();
// faz o multer receber as configurações que definimos no uploadConfig
var upload = multer_1.default(upload_1.default);
usersRouter.get('/', function (request, response) {
    return response.json(exports.userRepository.getUsers());
});
usersRouter.post('/', function (request, response) {
    var _a = request.body, name = _a.name, email = _a.email, password = _a.password, password_confirm = _a.password_confirm;
    var createUserService = new CreateUserService_1.default(exports.userRepository);
    try {
        var user = createUserService.execute({
            email: email,
            name: name,
            password: password,
            password_confirm: password_confirm,
        });
        return response.json(__assign(__assign({}, user), { password: '' }));
    }
    catch (err) {
        return response.status(400).json({ message: err.message });
    }
});
// no upload.single o parametro que vai dentro é o nome do campo que vai conter o arquivo no envio
// caso de erro ao tentar utilizar o upload.single é só ir em node_modules/multer e deletar o node_modules que esta la dentro (é um erro do multer)
usersRouter.patch('/avatar', upload.single('avatar'), function (request, response) {
    var file = request.file;
    var id = request.body.id;
    try {
        var updateAvatarUserService = new UpdateAvatarUserService_1.default(exports.userRepository);
        var user = updateAvatarUserService.execute({ id: id, avatar: file.filename });
        return response.json(__assign(__assign({}, user), { password: '' }));
    }
    catch (err) {
        return response.status(400).json({ message: err.message });
    }
});
exports.default = usersRouter;
