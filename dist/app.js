"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const exampleRoutes_1 = __importDefault(require("./routes/exampleRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const errorHandler_1 = require("./middleware/errorHandler");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use('/', exampleRoutes_1.default);
app.get("/", (req, res) => {
    res.json({
        message: "hello World"
    });
});
app.use(() => {
    throw (0, http_errors_1.default)(404, "Route introuvable");
});
app.use(errorHandler_1.errorHandler);
// app.listen(9000,()=>{
//     console.log("Server Started")
// })
mongoose_1.default
    .connect(config_1.DB)
    .then(() => {
    console.log("Connexion réussie");
    app.listen(config_1.PORT, () => {
        console.log(`Listening on Port ${config_1.PORT}`);
    });
})
    .catch(() => {
    throw (0, http_errors_1.default)(501, "Connexion échouée");
});
