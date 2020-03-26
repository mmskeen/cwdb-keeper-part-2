import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  const noteComponents = notes.map(n => (
    <Note key={n.id} title={n.title} content={n.content} />
  ));
  return (
    <div>
      <Header />
      {noteComponents}
      <Footer />
    </div>
  );
}

export default App;
