// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let DiretorSchema = new Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true, default: 0 },
    premios: { type: String },
    filmes: { type: String },
    avaliacao: { type: Number },
    comentario: { type: String }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Diretor', DiretorSchema, 'diretor');