import { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onHandleSubmit = (note) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const onHandleDelete = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure ypu want to delete this note?'
    );

    if (confirmDelete)
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
      <NoteForm onSubmit={onHandleSubmit} />
      <NoteList notes={notes} deleteNote={onHandleDelete} />
    </div>
  );
}

export default App;
