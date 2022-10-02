const Conteudo = require('../models/conteudo.model.js');

class UsuarioController {
    async conteudo_inserir(req, res) {
        try {
            const conteudo = await Conteudo.create(req.body)
            if (!conteudo) return res.status(406).json({ error: 'Erro inere conteudo.' });
            return res.status(200).json(conteudo)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conteudo_listar(req, res) {
        try {
            const conteudos = await Conteudo.find({}).sort({ nome: 1 });
            if (!conteudos) return res.status(406).json({ error: 'Erro lista conteúdos.' });
            return res.status(200).json(conteudos);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conteudo_buscar(req, res) {
        try {
            const { id } = req.params;
            const data = await Conteudo.findById(id);
            if (!data) return res.status(406).json({ error: 'Erro consulta conteúdo.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async conteudo_atualizar(req, res) {
        try {
            const conteudo = await Conteudo.findByIdAndUpdate(req.params.id, {$set: req.body});
            if (!conteudo) return res.status(406).json({ error: 'Erro atualizacao conteudo.' });
            return res.status(200).json(conteudo);
        } catch {
            return res.status(400).json(error);
        }
    }

    async conteudo_remover(req, res) {
        try {
            const conteudo = await Conteudo.findByIdAndRemove(req.params.id);
            if (!conteudo) return res.status(406).json({ error: 'Erro exclusão conteudo' });
            return res.status(200).json(conteudo);
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = UsuarioController;