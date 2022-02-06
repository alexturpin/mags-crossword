import './App.css'

import data from "./data.json"
import Crossword, { CrosswordProviderImperative } from '@jaredreisinger/react-crossword';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [showCompleted, setShowCompleted] = useState(false)
  const [completedClosed, setCompletedClosed] = useState(false)
  
  const ref = useRef<CrosswordProviderImperative>(null)

  useEffect(() => {
    if (localStorage.getItem("completed") === "true") setShowCompleted(true)
  }, [])

  return (
    <div className="crossword-container">
     <Crossword
      ref={ref}
      data={data}
      theme={{
       columnBreakpoint: "10000px",
       highlightBackground: "#a7d8fe",
       focusBackground: "#ffd902"
      }}
      onCorrect={(direction, number, answer) => gtag("event", "correct", { answer })}
      onCrosswordCorrect={(isCorrect) => {
        if (isCorrect) {
          setShowCompleted(true)
          localStorage.setItem("completed", "true")
          gtag("event", "completed")
        }
      }}
    />
    {(showCompleted && !completedClosed) && <div className="completed-modal">
      <div className="controls">
        <a href="#" onClick={() => {
          if (!ref.current) return
          ref.current.reset()
          setShowCompleted(false)
          localStorage.removeItem("completed")
        }}><i className="fas fa-redo"></i></a>
        <a href="#" onClick={() => setCompletedClosed(true)}><i className="fas fa-times"></i></a>
      </div>
      <div>
        <span>✌️</span>
        <a target="_blank" href="https://photos.app.goo.gl/pqugBMGzyoV1XQD27"><i className="fas fa-images"></i></a>
        <a target="_blank" href="https://open.spotify.com/playlist/0qj5aKdIapo0zcOPWv0yWK?si=dR9jJfFzT2apwyQVpZuCjQ"><i className="fab fa-spotify"></i></a>
      </div>
    </div>}
  </div>
  )
}

export default App
