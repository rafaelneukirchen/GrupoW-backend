"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var upload_1 = __importDefault(require("./config/upload"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/files', express_1.default.static(upload_1.default.directory));
app.use(routes_1.default);
app.listen(process.env.PORT || 3333, function () {
    console.log('Servidor rodando na porta 3333 🚀');
});
