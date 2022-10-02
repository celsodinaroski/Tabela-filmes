const Avaliacao = require('../models/avaliacao.model.js');

class UsuarioController {
    async avaliacao_inserir(req, res) {
        try {
            const avaliacao = await Avaliacao.create(req.body)
            if (!avaliacao) return res.status(406).json({ error: 'Erro inere avaliacao.' });
            return res.status(200).json(avaliacao)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async avaliacao_listar(req, res) {
        try {
            const avaliacoes = await Avaliacao.find({}).sort({ nome: 1 });
            if (!avaliacoes) return res.status(406).json({ error: 'Erro lista avaliações.' });
            return res.status(200).json(avaliacoes);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async avaliacao_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Avaliacao.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta avaliacao.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async avaliacao_atualizar(req, res) {
        try {
            const avaliacao = await Avaliacao.findByIdAndUpdate(req.params.id, {$set: req.body});
            if (!avaliacao) return res.status(406).json({ error: 'Erro atualizacao avaliacao.' });
            return res.status(200).json(avaliacao);
        } catch {
            return res.status(400).json(error);
        }
    }

    async avaliacao_remover(req, res) {
        try {
            const avaliacao = await Avaliacao.findByIdAndRemove(req.params.id);
            if (!avaliacao) return res.status(406).json({ error: 'Erro exclusão avaliacao' });
            return res.status(200).json(avaliacao);
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;