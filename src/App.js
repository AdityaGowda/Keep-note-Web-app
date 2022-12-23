import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((initValue) => {
      return [...initValue, newNote];
    });
  }

  function notesdelete(id) {
    setNotes((iniValue) => {
      return [...iniValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Header />
      
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={notesdelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
