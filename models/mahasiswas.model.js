var fs = require("fs");

const getAllMahasiswa = async () => {
        let rawdata = fs.readFileSync('data/db.json');
        let data = JSON.parse(rawdata);
        return { status: true, data: data }
}

const getOneMahasiswa = async (nim) => {
    let rawdata = fs.readFileSync('data/db.json');
    let data = JSON.parse(rawdata);
    let index = data.mahasiswa.findIndex(x => x.nim === nim);
    return { status: true, data: data.mahasiswa[index] }
}

const addOneMahasiswa = async (data, new_data) => {
    data.mahasiswa.push(new_data)
    fs.writeFileSync('data/db.json', JSON.stringify(data, null, 2));
    return { status: true, message: "Data berhasil ditambahkan" }
}

const updateOneMahasiswa = async (data, update_data, nim) => {
    let index = data.mahasiswa.findIndex(x => x.nim === nim);
    data.mahasiswa[index]['nama'] = update_data['nama']
    data.mahasiswa[index]['prodi'] = update_data['prodi']
    data.mahasiswa[index]['fakultas'] = update_data['fakultas']
    fs.writeFileSync('data/db.json', JSON.stringify(data, null, 2));
    return { status: true, message: "Data berhasil diperbarui" }
}

const deleteOneMahasiswa = async (data, nim) => {
    let index = data.mahasiswa.findIndex(x => x.nim === nim);
    data.mahasiswa.splice(index, 1)
    fs.writeFileSync('data/db.json', JSON.stringify(data, null, 2));
    return { status: true, message: "Data berhasil dihapus" }
}

module.exports = {
    getAllMahasiswa,
    getOneMahasiswa,
    addOneMahasiswa,
    updateOneMahasiswa,
    deleteOneMahasiswa
}