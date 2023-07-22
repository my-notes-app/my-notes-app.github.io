import { del, get, post, put } from './api.js';
import { addOwner } from './pointers.js';

export async function getAllNotes() {
  return await get('/classes/Notes');
}

export async function createNote(noteObj) {
  addOwner(noteObj);
  await post('/classes/Notes', noteObj);
}

export async function getNoteById(noteId) {
  return await get('/classes/Notes/' + noteId);
}

export async function deleteNoteById(noteId) {
  await del('/classes/Notes/' + noteId);
}

export async function editNoteById(noteId, noteObj) {
  addOwner(noteObj);
  await put('/classes/Notes/' + noteId, noteObj);
}
