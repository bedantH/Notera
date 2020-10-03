import React from "react";
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  function handleClick() {
    const id = props.noteId;
    axios({
      method: 'delete',
      url: 'http://localhost:5000',
      data: {
        noteId: id
      }
    });
    props.onDelete(id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button name={props.noteId} onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
  