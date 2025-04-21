import React from 'react'
import { Button } from './components/ui/button.jsx'
import { CardWithForm } from './components/userComponents/Form.jsx'

function App() {
  return (
    <div
      className='h-screen w-full flex items-center justify-center bg-slate-100'
    >
      <CardWithForm />
    </div>
  )
}

export default App