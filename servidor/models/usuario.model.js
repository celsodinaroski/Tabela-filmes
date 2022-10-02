// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let UsuarioSchema = new Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true, default: 0 },
    email: { type: String, required: true },
    genero_favorito: { type: String },
    senha: { type: String, required: true }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuario');
