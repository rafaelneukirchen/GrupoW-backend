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
var PostRepository_1 = __importDefault(require("../repositories/PostRepository"));
var CreatePostService_1 = __importDefault(require("../services/CreatePostService"));
var user_routes_1 = require("./user.routes");
var postRouter = express_1.Router();
var postRepository = new PostRepository_1.default();
postRouter.get('/', function (request, response) {
    return response.json(postRepository.getAll());
});
postRouter.post('/', function (request, response) {
    try {
        var _a = request.body, id = _a.id, text = _a.text;
        var createPostService = new CreatePostService_1.default(postRepository, user_routes_1.userRepository);
        var post = createPostService.execute({ id: id, text: text });
        return response.json(__assign(__assign({}, post), { user: __assign(__assign({}, post.user), { password: '' }) }));
    }
    catch (err) {
        return response
            .status(400)
            .json({ message: 'Failed to create a new Post!' });
    }
});
exports.default = postRouter;
