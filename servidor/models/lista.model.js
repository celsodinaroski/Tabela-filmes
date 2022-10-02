// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let ListaSchema = new Schema({
    filme_1: { type: String},
    filme_2: { type: String},
    filme_3: { type: String},
    filme_4: { type: String},
    filme_5: { type: String},
    filme_6: { type: String},
    filme_7: { type: String},
    filme_8: { type: String},
    filme_9: { type: String},
    filme_10: { type: String}
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Lista', ListaSchema, 'lista');