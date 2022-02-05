import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import data from "./data.json"
import Crossword from '@jaredreisinger/react-crossword';

function App() {
  return (
     <Crossword data={data} />
  )
}

export default App
