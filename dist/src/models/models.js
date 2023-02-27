"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkListSchema = exports.checkItemSchema = void 0;
var mongoose_1 = require("mongoose");
var checkListSchema = new mongoose_1.Schema({
    items: { type: [new mongoose_1.Schema()], required: true },
    id: { type: String, required: true },
});
exports.checkListSchema = checkListSchema;
var checkItemSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    done: { type: Boolean, required: true },
    id: { type: String, required: true },
});
exports.checkItemSchema = checkItemSchema;
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: String,
    id: String,
});
//# sourceMappingURL=models.js.map