import { deleteNoteById } from '../data/notes.js';

export async function deleteView(ctx) {
  const id = ctx.params.id;
  await deleteNoteById(id);
  ctx.page.redirect('/my-notes');
}
