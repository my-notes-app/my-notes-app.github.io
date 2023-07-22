import { html } from '../lib/lit-html.js';

export const layoutTemplate = (userData, content) =>
  html`
    <header>
      <nav>
        <div class="logo">
          <a href="/"><img src="./images/logo.png" alt="" /></a>
        </div>
        <div class="menu">
          ${userData
            ? html`
                <a href="/create" class="btnMenu">Create note</a>
                <a href="/my-notes" class="btnMenu">My notes</a>
                <a href="/logout" class="btnMenu">Logout</a>
              `
            : html`
                <a href="/login" class="btnMenu">Login</a>
                <a href="/register" class="btnMenu">Register</a>
              `}
        </div>
      </nav>
    </header>

    <main>${content}</main>

    <footer>
      <div class="footer">
        <p>
          This app was made by Nikolay Tzolov.
          <a href="http://github.com/ntzolov">GitHub</a>
        </p>
      </div>
    </footer>
  `;
