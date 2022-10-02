// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let AvaliacaoSchema = new Schema({
    nota: { type: Number },
    comentario: { type: String }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Avaliacao', AvaliacaoSchema, 'avaliacao');