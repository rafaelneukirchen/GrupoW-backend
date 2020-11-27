"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateUserAvatarService = /** @class */ (function () {
    function UpdateUserAvatarService(userRepository) {
        this.userRepository = userRepository;
    }
    UpdateUserAvatarService.prototype.execute = function (_a) {
        var id = _a.id, avatar = _a.avatar;
        try {
            var user = this.userRepository.setAvatar({ id: id, avatar: avatar });
            return user;
        }
        catch (err) {
            throw new Error(err.message);
        }
    };
    return UpdateUserAvatarService;
}());
exports.default = UpdateUserAvatarService;
