"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = __importDefault(require("../database"));
class usersControllers {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield database_1.default.query(`SELECT * FROM Users WHERE userName = '${req.params.user}' AND pass = '${req.params.pass}'`);
            console.log(typeof (resp));
            if (Object.keys(resp).length === 0) {
                return res.status(404).json({ text: "Error" });
            }
            else {
                return res.json({ text: "ENCONTRADO" });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Users SET ?', [req.body]);
            res.send({ text: "REGISTER" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`DELETE FROM Users WHERE userName = '${req.params.user}'`);
            res.send({ text: "DELETED" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`UPDATE Users SET ? WHERE userName = '${req.params.user}'`, [req.body]);
            res.send({ text: "UPDATED" });
        });
    }
}
exports.UsersController = new usersControllers();
