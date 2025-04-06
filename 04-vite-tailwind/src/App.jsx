import { useState } from 'react'

function App() {

  return (
    <div className='w-screen h-screen bg-amber-200 flex items-center justify-center flex-col'>
      <h1 className='mb-10 text-3xl font-bold text-stone-600'>Login Page</h1>
      <div className='flex items-center justify-center flex-col gap-y-2'>
        <input placeholder='Enter username' type='email' className='bg-slate-50 w-80 h-10 rounded-lg px-5 text-center outline-none border border-slate-800'/>
        <input placeholder='Enter password' type='password' className='bg-slate-50 w-80 h-10 rounded-lg px-5 text-center outline-none border border-slate-800'/>
        <button className='bg-black text-white px-5 h-10 rounded-lg text-lg hover:bg-slate-600 hover:cursor-pointer'>Login</button>
      </div>
    </div>
  )
}

export default App
