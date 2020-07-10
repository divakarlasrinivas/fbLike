"use strict";
exports.__esModule = true;
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    Like.prototype.onClick = function () {
        this.isSelected = !this.isSelected;
        this.likesCount += this.likesCount ? +1 : -1;
    };
    return Like;
}());
exports.Like = Like;
