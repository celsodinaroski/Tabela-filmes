const Diretor = require('../models/diretor.model.js');

class UsuarioController {
    async diretor_inserir(req, res) {
        try {
            const diretor = await Diretor.create(req.body)
            if (!diretor) return res.status(406).json({ error: 'Erro inere diretor.' });
            return res.status(200).json(diretor)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async diretor_listar(req, res) {
        try {
            const diretores = await Diretor.find({}).sort({ nome: 1 });
            if (!diretores) return res.status(406).json({ error: 'Erro lista diretores.' });
            return res.status(200).json(diretores);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async diretor_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Diretor.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta diretor.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async diretor_atualizar(req, res) {
        try {
            const diretor = await Diretor.findByIdAndUpdate(req.params.id, {$set: req.body});
            if (!diretor) return res.status(406).json({ error: 'Erro atualizacao diretor.' });
            return res.status(200).json(diretor);
        } catch {
            return res.status(400).json(error);
        }
    }

    async diretor_remover(req, res) {
        try {
            const diretor = await Diretor.findByIdAndRemove(req.params.id);
            if (!diretor) return res.status(406).json({ error: 'Erro exclusão diretor' });
            return res.status(200).json(diretor);
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;