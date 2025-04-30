import React, { useState, useEffect } from 'react'

function App() {
  const [len, setLen] = useState(8)
  const [password, setPassword] = useState("")

  const handleLengthInput = (e) => {
    setLen(e.target?.value)
  }

  const generateRandomPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?"
    let pass = ""

    for (let i = 1; i <= len; i++) {
      pass += chars[Math.round(Math.random() * (chars.length - 1))]
    }

    setPassword(pass)
  }

  useEffect(() => {
    generateRandomPassword()
  }, [len])

  // generateRandomPassword()
  // console.log(password);
  // console.log(len);

  return (
    <div className='w-screen h-screen bg-slate-200 flex items-center justify-center flex-col gap-y-5'>
      <input type='number' className='bg-white w-20 h-12 text-center rounded-2xl outline-none border border-slate-800' value={len} onChange={handleLengthInput} />
      <p className='h-10 w-80 bg-slate-400 rounded-2xl flex items-center justify-center text-white'>
        {password}
      </p>
    </div>
  )
}

export default App