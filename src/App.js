import React from "react";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import DragNDrop from "./components/DragNDrop";


function App() {
  return (
    <DndProvider debugMode={true} backend={HTML5Backend}>
      <div className="app">
        <DragNDrop />
      </div>
    </DndProvider>
  );
}
export default App;