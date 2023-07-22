import { html } from '../lib/lit-html.js';
import { login } from '../data/auth.js';

const loginTemplate = (onLogin) => html`
  <section id="login-page">
    <form @submit=${onLogin}>
      <div class="login-container">
        <h1>Login</h1>

        <label for="username">Username:</label>
        <input type="text" name="username" placeholder="Type your username." />

        <label for="password">Password:</label>
        <input type="password" name="password" placeholder="Type your password." />

        <input id="btnLogin" type="submit" value="Login" />

        <p class="field">
          <span>
            If you don't have profile click
            <a href="/register">here</a>
          </span>
        </p>
      </div>
    </form>
  </section>
`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onLogin));

  async function onLogin(e) {
    e.preventDefault();

    const { username, password } = Object.fromEntries(new FormData(document.querySelector('form')));

    if (username === '' || password === '') {
      return alert('All fields are required!');
    }

    await login(username, password);
    ctx.page.redirect('/');
  }
}
