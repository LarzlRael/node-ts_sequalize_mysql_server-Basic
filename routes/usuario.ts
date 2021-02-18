import { Router } from 'express';
import { deleteusuario, getusuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuario';

const router = Router();



export default router;

router.get('/',       getUsuarios);
router.get('/:id',    getusuario);
router.post('/',      postUsuario);
router.put('/:id',    putUsuario);
router.delete('/:id', deleteusuario);