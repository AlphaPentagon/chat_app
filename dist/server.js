"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
server.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
