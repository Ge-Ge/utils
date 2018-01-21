"use strict";
exports.__esModule = true;
var ClassList = /** @class */ (function () {
    function ClassList(ele) {
        this.ele = ele;
    }
    ClassList.prototype.hasClass = function (className) {
        if (!className)
            return false;
        if (this.ele.classList) {
            return this.ele.classList.contains(className);
        }
        else {
            return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.ele.className);
        }
    };
    ClassList.prototype.addClass = function (className) {
        if (!className)
            return this;
        if (this.ele.classList) {
            this.ele.classList.add(className);
        }
        else {
            if (this.hasClass(className)) {
                this.ele.className += ' ' + className;
            }
        }
        return this;
    };
    ClassList.prototype.removeClass = function (className) {
        if (this.ele.classList) {
            this.ele.classList.remove(className);
        }
        else {
            if (this.hasClass(className)) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                this.ele.className = this.ele.className.replace(reg, '');
            }
        }
        return this;
    };
    return ClassList;
}());
exports["default"] = ClassList;
