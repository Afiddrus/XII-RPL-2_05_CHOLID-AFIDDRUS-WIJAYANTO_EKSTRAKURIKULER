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
    },
    pembimbing_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan pembimbing ekskul'],
    },
    lokasi_ekskul: {
        type: String,
        required: [true, 'Silahkan isikan lokasi ekskul'],
    },
    total_murid: {
        type: String,
        required: [true, 'Silahkan isikan total murid'],
    },
    kontak_pembimbing: {
        type: String,
        required: [true, 'Silahkan isikan kontak pembimbing'],
    },
})

module.exports = mongoose.model('Ekskul', EkstraSchema)
