"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMode = exports.SuccessModel = void 0;
class BaseModel {
    constructor(data, message, errno) {
        if (typeof data === "string") {
            this.message = data;
        }
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
        this.errno = errno;
    }
}
class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message, 0);
    }
}
exports.SuccessModel = SuccessModel;
class ErrorMode extends BaseModel {
    constructor(data, message) {
        super(data, message, -1);
    }
}
exports.ErrorMode = ErrorMode;
