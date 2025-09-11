import Note from './Note';

export default function NoteList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}
