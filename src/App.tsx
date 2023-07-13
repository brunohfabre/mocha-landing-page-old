import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes } from './Routes'

export function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

