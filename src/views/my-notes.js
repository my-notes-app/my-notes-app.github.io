import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllGames } from '../data/games.js';

const noteCard = (note) => html`
  <div class="note-card" style="background-color: ${note.category}; color: ${note.maxLevel}">
    <div class="title">${note.title}</div>
    <div class="content">${note.summary}</div>
    <div class="buttons-card">
      <a href="/edit/${note._id}" class="btnEdit">Edit</a>
      <a href="/delete/${note._id}" class="btnDelete">Delete</a>
    </div>
  </div>
`;

const myNotesTemplate = (notes) => html`
  <section>
    <div class="my-notes-container">${notes.map((note) => noteCard(note))}</div>
  </section>
`;

export async function myNotesView(ctx) {
  const notes = await getAllGames();

  ctx.render(myNotesTemplate(notes));
}
