import './App.css'

import data from "./data.json"
import Crossword from '@jaredreisinger/react-crossword';

function App() {
  return (
    <div className="crossword-container">
     <Crossword data={data} theme={{
       columnBreakpoint: "10000px",
       highlightBackground: "#a7d8fe",
       focusBackground: "#ffd902"
     }} />
    </div>
  )
}

export default App
