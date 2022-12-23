import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function hC(e) {
    const { name, value } = e.target;
    setNote((Prevalue) => {
      return {
        ...PreValue,
        [name]: value,
      };
    });
  }
  function hE() {
    setExpanded(true);
  }

  function submit(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={hC}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={hE}
            name="content"
            placeholder="Create a note..."
            onChange={hC}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={submit}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pId="10297" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path></svg>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
