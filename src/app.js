import { render } from '../src/lib/lit-html.js';
import page from '../src/lib/page.mjs';
import { getUser } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { homeView } from './views/home.js';
import { registerView } from './views/register.js';
import { loginView } from './views/login.js';
import { myNotesView } from './views/my-notes.js';
import { createView } from './views/create.js';
import { logout } from './data/auth.js';
import { deleteView } from './views/delete.js';
import { editView } from './views/edit.js';

const root = document.querySelector('body');

page(decorateContext);
page('/index.html', '/');
page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutAction);
page('/my-notes', myNotesView);
page('/create', createView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);

page.start();

// Middleware - render nav + content
function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}

// Function for middleware - render
function renderView(content) {
  const userData = getUser();
  render(layoutTemplate(userData, content), root);
}

async function logoutAction(ctx) {
  await logout();
  ctx.page.redirect('/');
}
