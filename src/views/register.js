import { html } from '../lib/lit-html.js';
import { register } from '../data/auth.js';

const registerTemplate = (onRegister) => html`
  <section id="register-page">
    <form @submit=${onRegister}>
      <div class="register-container">
        <h1>Register</h1>

        <label for="username">Username:</label>
        <input type="text" name="username" placeholder="Type your username." />

        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Type your password." />

        <label for="rePass">Confirm Password:</label>
        <input type="password" name="rePass" placeholder="Confirm your password" />

        <input id="btnRegister" type="submit" value="Register" />

        <p class="field">
          <span>
            If you already have profile click
            <a href="/login">here</a>
          </span>
        </p>
      </div>
    </form>
  </section>
`;

export function registerView(ctx) {
  ctx.render(registerTemplate(onRegister));

  async function onRegister(e) {
    e.preventDefault();

    const { username, password, rePass } = Object.fromEntries(new FormData(document.querySelector('form')));

    if (username === '' || password === '' || rePass === '') {
      return alert('All fields required!');
    }

    if (password !== rePass) {
      return alert("Password don't match!");
    }

    await register(username, password);
    ctx.page.redirect('/');
  }
}