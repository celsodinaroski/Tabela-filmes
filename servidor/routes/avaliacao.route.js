import axios from 'axios'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/avaliacao.controller.js');
const itemcontroller = new controller();

router.post('/inserir', itemcontroller.avaliacao_inserir);
router.get('/listar', itemcontroller.avaliacao_listar);
router.get('/buscar/:id', itemcontroller.avaliacao_buscar);
router.put('/atualizar/:id', itemcontroller.avaliacao_atualizar);
router.delete('/remover/:id', itemcontroller.avaliacao_remover);

module.exports = router;

// post: inserir    (C)
// get: ler         (R)
// put: atualizar   (U)
// delete: remover  (D)