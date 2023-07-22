import { html } from '../lib/lit-html.js';
import { editGameById, getGameById } from '../data/games.js';

const editTemplate = (note, onEdit, btnBackgroundColor, btnTextColor) => html`
  <section id="edit-page">
    <form @submit=${onEdit}>
      <div class="edit-container">
        <h1>Edit note</h1>

        <label for="title">Title</label>
        <input type="text" name="title" .value=${note.title} />

        <label for="content">Content</label>
        <textarea name="content" cols="30" rows="10" .value=${note.summary}></textarea>

        <div class="background-color-container">
          <p>Select background color</p>
          <div class="background-color-buttons">
            <button @click=${btnBackgroundColor} data-color="#f7db8d" style="background-color: #f7db8d"></button>
            <button @click=${btnBackgroundColor} data-color="#f79b8d" style="background-color: #f79b8d"></button>
            <button @click=${btnBackgroundColor} data-color="#c9f78d" style="background-color: #c9f78d"></button>
            <button @click=${btnBackgroundColor} data-color="#0a7d7b" style="background-color: #0a7d7b"></button>
            <button @click=${btnBackgroundColor} data-color="#0a2b7d" style="background-color: #0a2b7d"></button>
            <button @click=${btnBackgroundColor} data-color="#7d0a59" style="background-color: #7d0a59"></button>
          </div>
        </div>

        <input type="color" id="background-color-picker" name="backgroundColor" value=${note.category} />

        <div class="text-color-container">
          <p>Select text color</p>
          <div class="text-color-buttons">
            <button @click=${btnTextColor} data-color="#000000" style="background-color: #000000"></button>
            <button @click=${btnTextColor} data-color="#ffffff" style="background-color: #ffffff"></button>
          </div>
        </div>

        <input type="color" id="text-color-picker" name="textColor" value=${note.maxLevel} />

        <input id="btnEdit" type="submit" value="Edit" />
      </div>
    </form>
  </section>
`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const note = await getGameById(id);

  ctx.render(editTemplate(note, onEdit, btnBackgroundColor, btnTextColor));

  async function onEdit(e) {
    e.preventDefault();

    const { title, content, backgroundColor, textColor } = Object.fromEntries(new FormData(document.querySelector('form')));

    // Write a logic for empty fields!!!;
    await editGameById(id, { title, category: backgroundColor, maxLevel: textColor, imageUrl: '', summary: content });
    ctx.page.redirect('/my-notes');
  }

  function btnBackgroundColor(e) {
    e.preventDefault();
    const color = e.currentTarget.dataset.color;
    document.getElementById('background-color-picker').value = color;
  }

  function btnTextColor(e) {
    e.preventDefault();
    const color = e.currentTarget.dataset.color;
    document.getElementById('text-color-picker').value = color;
  }
}
