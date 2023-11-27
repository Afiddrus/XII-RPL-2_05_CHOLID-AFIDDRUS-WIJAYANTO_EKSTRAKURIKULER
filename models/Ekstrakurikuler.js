const mongoose = require('mongoose')

const EkstraSchema = new mongoose.Schema({
    nama_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan nama ekskul'],
        unique: true
    },
    jadwal_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan jadwal ekskul'],
        unique: true
    },
    pembimbing_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan pembimbing ekskul'],
        unique: true
    },
    lokasi_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan lokasi ekskul'],
        unique: true
    },
    total_murid: {
        type: String,
        required: [true, 'Silahkan isikan total murid'],
        unique: true
    },
    kontak_pembimbing: {
        type: String,
        required: [true, 'Silahkan isikan kontak pembimbing'],
        unique: true
    },
})

module.exports = mongoose.model('Ekskul', EkstraSchema)