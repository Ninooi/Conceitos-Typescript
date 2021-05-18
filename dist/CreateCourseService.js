"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseservice = /** @class */ (function () {
    function CreateCourseservice() {
    }
    CreateCourseservice.prototype.execute = function (_a) {
        var name = _a.name, _b = _a.duration, duration = _b === void 0 ? 8 : _b, educator = _a.educator;
        console.log(name, duration, educator);
    };
    return CreateCourseservice;
}());
exports.default = new CreateCourseservice();
