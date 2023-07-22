import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
  <div class="wrapper">
    <div class="main">
      <h1>Welcome to my notes app.</h1>
      <h3>You can simply create and store your notes here!</h3>
      <div class="login-register">
        <div class="register">
          You don't have an account? Register <a href="/register">here</a>
        </div>
        <div class="login">
          You already have an account? Login <a href="/login">here</a>
        </div>
      </div>
    </div>
  </div>
`;

export async function homeView(ctx) {
  ctx.render(homeTemplate());
}
