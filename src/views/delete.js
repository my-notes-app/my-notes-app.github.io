import { deleteGameById } from '../data/games.js';

export async function deleteView(ctx) {
  const id = ctx.params.id;
  await deleteGameById(id);
  ctx.page.redirect('/my-notes');
}
