import { html } from '../lib/lit-html.js';
import { getUser } from '../util.js';

const homeTemplate = (userData, time) => html`
  <div class="wrapper">
    <div class="main">
      ${userData
        ? html`
            <h1>Welcome, @${userData.username}</h1>
            <p>${time}</p>
          `
        : html`
            <h1>Welcome to my notes app.</h1>
            <h3>You can simply create and store your notes here!</h3>
            <div class="login-register">
              <div class="register">
                You don't have an account? Register
                <a href="/register">here</a>
              </div>
              <div class="login">
                You already have an account? Login
                <a href="/login">here</a>
              </div>
            </div>
          `}
    </div>
  </div>
`;

export async function homeView(ctx) {
  const userData = getUser();
  const time = new Date();

  setInterval(function () {
    const time = new Date();
    ctx.render(homeTemplate(userData, time));
  }, 1000);
}
