// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let ConteudoSchema = new Schema({
    titulo: { type: String, required: true },
    avaliacao: { type: Number },
    comentario: { type: String },
    sinopse: { type: String, required: true }, 
    ano_lancamento: { type: Date }, 
    duracao: { type: String, required: true }, 
    genero: { type: String, required: true }, 
    categoria: { type: String },
    premio: { type: String }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Conteudo', ConteudoSchema, 'conteudo');