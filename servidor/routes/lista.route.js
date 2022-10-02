const express = require('express');
const router = express.Router();

const controller = require('../controllers/lista.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.lista_inserir);
router.get('/listar', itemcontroller.lista_listar);
router.get('/buscar/:id', itemcontroller.lista_buscar);
router.put('/atualizar/:id', itemcontroller.lista_atualizar);
router.delete('/remover/:id', itemcontroller.lista_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)