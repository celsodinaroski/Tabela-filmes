const express = require('express');
const router = express.Router();

const controller = require('../controllers/conteudo.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.conteudo_inserir);
router.get('/listar', itemcontroller.conteudo_listar);
router.get('/buscar/:id', itemcontroller.conteudo_buscar);
router.put('/atualizar/:id', itemcontroller.conteudo_atualizar);
router.delete('/remover/:id', itemcontroller.conteudo_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)