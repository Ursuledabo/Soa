"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExample = void 0;
const getExample = (req, res, next) => {
    res.json({ message: "hello test route" });
};
exports.getExample = getExample;
