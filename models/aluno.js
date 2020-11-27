const mongoose = require('mongoose')

// definição do esquema
const alunoSchema = new mongoose.Schema({
    id : {
        type: String,
        required: false
    },
    matricula: {
        type: String,
        required: true
    },
    anoSemestreDeEntrada: {
        type: String,
        required: true
    },
    nomeCompleto: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: Date.now
    },
    atualizadoEm: {
        type: Date,
        required: true,
        default: Date.now
    }

})

// configurando o esquema no banco
module.exports = mongoose.model('Aluno', alunoSchema)