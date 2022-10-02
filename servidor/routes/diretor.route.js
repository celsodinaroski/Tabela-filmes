const express = require('express');
const router = express.Router();

const controller = require('../controllers/diretor.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.diretor_inserir);
router.get('/listar', itemcontroller.diretor_listar);
router.get('/buscar/:id', itemcontroller.diretor_buscar);
router.put('/atualizar/:id', itemcontroller.diretor_atualizar);
router.delete('/remover/:id', itemcontroller.diretor_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)