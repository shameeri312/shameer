import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Home } from './components/Home'
import { Content } from './components/Content'

function App() {

  return (
    <>
      <Sidebar />
      <Content />
    </>
  )
}

export default App
