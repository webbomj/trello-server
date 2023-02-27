"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = void 0;
var mongoose_1 = require("mongoose");
var isValidId = function (id) {
    var isValid = (0, mongoose_1.isValidObjectId)(id);
    return isValid;
};
exports.isValidId = isValidId;
//# sourceMappingURL=isValidId.js.map