import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isbol, setbol] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setbol(true);
  }

  function handler(e) {
    const { name, value } = e.target;
    setNote((prevnote) => {
      return {
        ...prevnote,
        [name]: value,
      };
    });
  }

  function noteAdder(event) {
    props.onadd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        {isbol ? (
          <input
            name="title"
            value={note.title}
            onChange={handler}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handler}
          value={note.content}
          placeholder="Take a note..."
          rows={isbol ? 3 : 1}
        />
        <Zoom in={isbol}>
          <Fab onClick={noteAdder} sx={{ backgroundColor: '#f5ba13' }}>
          <AddIcon sx={{ color: 'White' }} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
