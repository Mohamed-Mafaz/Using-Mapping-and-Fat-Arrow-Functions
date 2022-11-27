import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function result(note) {
//   return (
//     <div>
//       <Note key={note.id} note={note.title} content={note.content}></Note>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note key={note.id} note={note.title} content={note.content}></Note>
      ))}
      <Footer />
    </div>
  );
}

export default App;
