const { getAllMahasiswa, getOneMahasiswa, addOneMahasiswa, updateOneMahasiswa, deleteOneMahasiswa } = require('../models/mahasiswas.model');

const getMahasiswa = async (req, res) => {
    getAllMahasiswa()
        .then((result) => {
            res.send(result)
        })
}

const getMahasiswaByNim = async (req, res) => {
    const {nim} = req.params
    getOneMahasiswa(nim)
        .then((result) => {
            res.send(result)
        })
}

const addMahasiswa = async (req, res) => {
    getAllMahasiswa()
        .then((result) => {
            let new_data = req.body
            addOneMahasiswa(result.data, new_data)
                .then((result) => {
                    res.send(result)
                })
        })
}

const updateMahasiswa = async (req, res) => {
    getAllMahasiswa()
        .then((result) => {
            let update_data = req.body
            let { nim } = req.params
            updateOneMahasiswa(result.data, update_data, nim)
                .then((result) => {
                    res.send(result)
                })
        })
}

const deleteMahasiswa = async (req, res) => {
    getAllMahasiswa()
        .then((result) => {
            let { nim } = req.params
            deleteOneMahasiswa(result.data, nim)
                .then((result) => {
                    res.send(result)
                })
        })
}

module.exports = {
    getMahasiswa,
    getMahasiswaByNim,
    addMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}