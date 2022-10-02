const Lista = require('../models/lista.model.js');

class UsuarioController {
    async lista_inserir(req, res) {
        try {
            const lista = await Lista.create(req.body)
            if (!lista) return res.status(406).json({ error: 'Erro inere lista.' });
            return res.status(200).json(lista)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async lista_listar(req, res) {
        try {
            const lista = await Lista.find({}).sort({ nome: 1 });
            if (!lista) return res.status(406).json({ error: 'Erro listar lista.' });
            return res.status(200).json(lista);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async lista_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Lista.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta lista.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async lista_atualizar(req, res) {
        try {
            const lista = await Lista.findByIdAndUpdate(req.params.id, {$set: req.body});
            if (!lista) return res.status(406).json({ error: 'Erro atualizacao lista.' });
            return res.status(200).json(lista);
        } catch {
            return res.status(400).json(error);
        }
    }

    async lista_remover(req, res) {
        try {
            const lista = await Lista.findByIdAndRemove(req.params.id);
            if (!lista) return res.status(406).json({ error: 'Erro exclusão lista' });
            return res.status(200).json(lista);
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;