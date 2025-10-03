const { addNoteHandler } = require('./handler/addNoteHandler.js');
const { getNoteHandler } = require('./handler/getNoteHandler');
const { editNoteHandler } = require('./handler/editNoteHandler');
const { deleteNoteHandler } = require('./handler/deleteNoteHandler');
const cors  = require('./cors');

const routes = [
    {
        method: 'POST',
        path: '/notes', 
        handler: addNoteHandler, 
        options: cors,  
    }, 
    {
        method: 'GET', 
        path: '/notes/{id?}', 
        handler: getNoteHandler, 
        options: cors, 
    }, 
    {
        method: 'PUT', 
        path: '/notes/{id}', 
        handler: editNoteHandler,
        options: cors, 
    }, 
    {
        method: 'DELETE', 
        path: '/notes/{id}', 
        handler: deleteNoteHandler, 
        options: cors, 
    }, 
];

module.exports = routes;