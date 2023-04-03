import { useState } from "react";
import{ nanoid } from 'nanoid'
import NotesList from "./components/Notes_List";

const App =()=> {
  const [notes, setNotes]=useState([
  {
    text:"This is my first note!",
    date: "04/02/2023",
  },
  {
    text:"This is my second note!",
    date: "04/02/2023",
  },
  {
    text:"This is my third note!",
    date: "04/02/2023",
  }
]);
  return <div className="container">
    <NotesList notes={notes} />
  </div>
};

export default App;
