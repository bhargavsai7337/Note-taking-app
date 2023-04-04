import { useState } from "react";
import{ nanoid } from 'nanoid'
import NotesList from "./components/Notes_List";

const App =()=> {
  const [notes, setNotes]=useState([
  {
    id: nanoid(),
    text:"This is my first note!",
    date: "04/02/2023",
  },
  {
    id: nanoid(),
    text:"This is my second note!",
    date: "04/02/2023",
  },
  {
    id: nanoid(),
    text:"This is my third note!",
    date: "04/02/2023",
  }
]);

const AddNote =(text) => {
  const date=new Date();
  const newNote ={
    id:nanoid(),
    text:text,
    date: date.toLocaleDateString()
  }

  const newNotes = [...notes,newNote];
  setNotes(newNotes);
}

  return <div className="container">
    <NotesList notes={notes} handleAddNote={AddNote}/>
  </div>
};

export default App;
