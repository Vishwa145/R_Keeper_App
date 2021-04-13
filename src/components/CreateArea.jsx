import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [expands, change] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    change(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          style={{ display: expands ? "Block" : "none" }}
          required
        />
        <textarea
          name="content"
          onMouseOver={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expands ? "3" : "1"}
        />

        <Zoom in={expands}>
          <button>
            <NoteAddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
