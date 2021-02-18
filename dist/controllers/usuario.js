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
exports.deleteusuario = exports.putUsuario = exports.postUsuario = exports.getusuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
const getusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id);
    if (user) {
        res.json({
            user
        });
    }
    else {
        res.status(404).json({
            msg: `there is not user with ${id} id`
        });
    }
});
exports.getusuario = getusuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const userExist = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (userExist) {
            return res.status(404).json({
                msg: `The user ${body.email} there is exist already`
            });
        }
        const usuario = new usuario_1.default(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Talk with de admin`
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield usuario_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: `the user with the ${id} id there is not exists`
            });
        }
        yield user.update(body);
        return res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Talk with de admin`
        });
    }
});
exports.putUsuario = putUsuario;
const deleteusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `There is not exisit a user with the ${id} id`
        });
    }
    //  only update the stated field instead delete the row
    yield usuario.update({ estado: false });
    // await usuario.destroy()
    res.json(usuario);
});
exports.deleteusuario = deleteusuario;
//# sourceMappingURL=usuario.js.map