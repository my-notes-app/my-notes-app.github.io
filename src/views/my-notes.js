import { html } from '../lib/lit-html.js';
import { until } from '../lib/directives/until.js';
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

const myNotesTemplate = (promise) => html`
  <section>
    <div class="my-notes-container">
      ${until(
        promise,
        html`
          <h1 style="color: yellow; font-size: medium; text-align: center">Loading...</h1>
        `
      )}
    </div>
  </section>
`;

export async function myNotesView(ctx) {
  async function loadNotes() {
    const notesObj = await getAllNotes();
    const notes = notesObj.results;

    return notes.map((note) => noteCard(note));
  }

  ctx.render(myNotesTemplate(loadNotes()));
}
