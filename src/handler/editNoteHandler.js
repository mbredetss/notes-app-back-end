const notes = require('../notes');

const editNoteHandler = (request, h) => {
    const { id } = request.params;

    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex(note => note.id == id);

    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        }

        return h.response({
            status: 'success',
            message: 'Catatan berhasil di perbarui'
        }).code(200);
    }

    return h.response({
        status: 'fail',
        message: 'Gagal memperbarui catatan. Id catatan tidak ditemukan',
    }).code(404);
}

module.exports = { editNoteHandler };