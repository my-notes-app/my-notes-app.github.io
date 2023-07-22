import { html } from '../lib/lit-html.js';
import { getAllNotes } from '../data/notes.js';

const noteCard = (note) => html`
  <div class="note-card" style="background-color: ${note.backgroundColor}; color: ${note.textColor}">
    <div class="title">${note.title}</div>
    <div class="content">${note.text}</div>
    <div class="buttons-card">
      <a href="/edit/${note.objectId}" class="btnEdit">Edit</a>
      <a href="/delete/${note.objectId}" class="btnDelete">Delete</a>
    </div>
  </div>
`;

const myNotesTemplate = (notes) => html`
  <section>
    <div class="my-notes-container">${notes.map((note) => noteCard(note))}</div>
  </section>
`;

export async function myNotesView(ctx) {
  const notesObj = await getAllNotes();
  const notes = notesObj.results;

  ctx.render(myNotesTemplate(notes));
}
