var express = require('express');
var router = express.Router();
var { getMahasiswa, addMahasiswa, updateMahasiswa, deleteMahasiswa, getMahasiswaByNim } = require('../controllers/mahasiswas.controller')

router.get('/', getMahasiswa);
router.get('/:nim', getMahasiswaByNim);
router.post('/', addMahasiswa);
router.put('/:nim', updateMahasiswa);
router.delete('/:nim', deleteMahasiswa);

module.exports = router;
