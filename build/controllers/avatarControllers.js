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
exports.AvatarController = void 0;
const database_1 = __importDefault(require("../database"));
class avatarControllers {
    img(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avatars = yield database_1.default.query(`SELECT * FROM Avatars`);
            res.json(avatars);
        });
    }
    imgByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avatar = yield database_1.default.query(`SELECT * FROM Avatars WHERE id = ${req.params.id}`);
            return res.json(avatar);
        });
    }
    imgByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avatar = yield database_1.default.query(`SELECT A.img FROM Users U INNER JOIN Avatars A ON U.avatar = A.id 
        WHERE U.userName = '${req.params.UserName}'`);
            return res.json(avatar);
        });
    }
}
exports.AvatarController = new avatarControllers();
