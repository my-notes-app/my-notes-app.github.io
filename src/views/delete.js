import { deleteNoteById } from '../data/notes.js';

export async function deleteView(ctx) {
  const confirmQuestion = confirm('Are you sure you want to delete this note?');

  if (confirmQuestion) {
    const id = ctx.params.id;
    await deleteNoteById(id);
    ctx.page.redirect('/my-notes');
  }
}
