const notes = require('../notes');

const deleteNoteHandler = (request, h) => {
    const { id } = request.params

    const index = notes.findIndex(note => note.id == id);

    if (index !== -1) {
        notes.splice(index, 1);

        return h.response({
            status: 'success',
            message: 'Catatan berhasil dihapus'
        }).code(200);
    }

    return h.response({
        status: 'fail',
        message: 'Catatan gagal dihapus. Id catatan tidak ditemukan',
    }).code(404);
}

module.exports = { deleteNoteHandler };