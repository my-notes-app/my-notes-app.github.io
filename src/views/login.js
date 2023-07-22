import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';

const loginTemplate = (onLogin) => html`
  <section id="login-page">
    <form @submit=${onLogin}>
      <div class="login-container">
        <h1>Login</h1>

        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Type your email." />

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

    const { email, password } = Object.fromEntries(new FormData(document.querySelector('form')));

    if (email === '' || password === '') {
      return alert('All fields are required!');
    }

    await login(email, password);
    ctx.page.redirect('/');
  }
}
