"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = __importDefault(require("../models/Post"));
var CreatePostService = /** @class */ (function () {
    function CreatePostService(postRepository, userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }
    CreatePostService.prototype.execute = function (_a) {
        var id = _a.id, text = _a.text;
        var user = this.userRepository.getUsers().filter(function (u) { return u.id === id; })[0];
        if (!user) {
            throw new Error("User does't exist");
        }
        if (!text) {
            throw new Error('The text is empty');
        }
        var post = new Post_1.default({ text: text, user: user });
        this.postRepository.addPost(post);
        return post;
    };
    return CreatePostService;
}());
exports.default = CreatePostService;
