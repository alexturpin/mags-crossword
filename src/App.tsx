import './App.css'

import data from "./data.json"
import Crossword from '@jaredreisinger/react-crossword';

function App() {
  const completed = () => {
    // TODO
  }

  return (
    <div className="crossword-container">
     <Crossword
      data={data}
      theme={{
       columnBreakpoint: "10000px",
       highlightBackground: "#a7d8fe",
       focusBackground: "#ffd902"
      }}
      onCorrect={(direction, number, answer) => gtag("event", "correct", { answer })}
      onCrosswordCorrect={() => {
        completed()
        gtag("event", "completed")
      }}
      onLoadedCorrect={completed}
    />
    </div>
  )
}

export default App
