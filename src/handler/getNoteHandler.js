const notes = require('../notes');

const getNoteHandler = (request, h) => {
    const { id } = request.params;

    if (id) {
        const getNoteById = notes.filter(note => note.id == id);

        // Cek apakah id yang dikirim ada di daftar notes atau tidak
        if (getNoteById.length > 0) {
            return {
                status: 'success',
                data: {
                    note: getNoteById[0]
                }
            };
        }

        // Jika tidak ada, maka kembalikan response gagal
        return h.response({
            status: 'fail',
            message: 'Catatan tidak ditemukan'
        }).code(404);
    }

    return ({
        status: 'success',
        data: {
            notes
        }
    });
}

module.exports = { getNoteHandler }