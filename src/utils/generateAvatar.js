"use strict";
// generateAvatar.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomAvatarUrl = void 0;
var generateRandomAvatarUrl = function () {
    var baseUrl = 'https://api.dicebear.com/6.x/avataaars/svg?seed=';
    var randomString = Math.random().toString(36).substring(7);
    return "".concat(baseUrl).concat(randomString);
};
exports.generateRandomAvatarUrl = generateRandomAvatarUrl;
var randomAvatarUrl = (0, exports.generateRandomAvatarUrl)();
console.log('Generated Avatar URL:', randomAvatarUrl); // Should display the generated URL
