import { html } from '../lib/lit-html.js';
import { createNote } from '../data/notes.js';

const createTemplate = (onCreate, btnBackgroundColor, btnTextColor) => html`
  <section id="create-page">
    <form @submit=${onCreate}>
      <div class="create-container">
        <h1>Create note</h1>

        <label for="title">Title</label>
        <input type="text" name="title" placeholder="Your title here." />

        <label for="text">Text</label>
        <textarea name="text" cols="30" rows="10" placeholder="Your content here."></textarea>

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

        <input type="color" id="background-color-picker" name="backgroundColor" value="#f7db8d" />

        <div class="text-color-container">
          <p>Select text color</p>
          <div class="text-color-buttons">
            <button @click=${btnTextColor} data-color="#000000" style="background-color: #000000"></button>
            <button @click=${btnTextColor} data-color="#ffffff" style="background-color: #ffffff"></button>
          </div>
        </div>

        <input type="color" id="text-color-picker" name="textColor" value="#000000" />

        <input id="btnCreate" type="submit" value="Create" />
      </div>
    </form>
  </section>
  <footer>
    <div class="footer">
      <p>
        This app was made by Nikolay Tzolov.
        <a href="http://github.com/ntzolov">GitHub</a>
      </p>
    </div>
  </footer>
`;

export function createView(ctx) {
  ctx.render(createTemplate(onCreate, btnBackgroundColor, btnTextColor));

  async function onCreate(e) {
    e.preventDefault();

    const { title, text, backgroundColor, textColor } = Object.fromEntries(new FormData(document.querySelector('form')));

    if ([title, text, backgroundColor, textColor].some((el) => el === '')) {
      return alert('All fields are required!');
    }

    await createNote({ title, text, backgroundColor, textColor });
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
