"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = express_1.Router();
exports.default = router;
router.get('/', usuario_1.getUsuarios);
router.get('/:id', usuario_1.getusuario);
router.post('/', usuario_1.postUsuario);
router.put('/:id', usuario_1.putUsuario);
router.delete('/:id', usuario_1.deleteusuario);
//# sourceMappingURL=usuario.js.map