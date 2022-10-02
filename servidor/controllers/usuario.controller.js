const Usuario = require('../models/usuario.model.js');

class UsuarioController {
    async usuario_inserir(req, res) {
        try {
            const usuario = await Usuario.create(req.body)
            if (!usuario) return res.status(406).json({ error: 'Erro inserir usuario.' });
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_listar(req, res) {
        try {
            const usuarios = await Usuario.find({}).sort({ nome: 1 });
            if (!usuarios) return res.status(406).json({ error: 'Erro lista usuarios.' });
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Usuario.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta usuario.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_atualizar(req, res) {
        try {
            const usuario = await Usuario.findByIdAndUpdate(req.params.id, {$set: req.body});
            if (!usuario) return res.status(406).json({ error: 'Erro atualizacao usuario.' });
            return res.status(200).json(usuario);
        } catch {
            return res.status(400).json(error);
        }
    }

    async usuario_remover(req, res) {
        try {
            const usuario = await Usuario.findByIdAndRemove(req.params.id);
            if (!usuario) return res.status(406).json({ error: 'Erro exclusão usuario' });
            return res.status(200).json(usuario);
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;