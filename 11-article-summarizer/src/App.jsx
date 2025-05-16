import React from 'react'
import axios from "axios";
import { LuLoaderCircle } from "react-icons/lu";

function App() {

  const [URL, setURL] = React.useState("")
  const [summary, setSummary] = React.useState("")
  const [status, setStatus] = React.useState(false)

  const handleURLChange = (e) => {
    setURL(e.target?.value)
  }

  const handleArticleSummarize = async () => {
    setStatus(true)
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: URL,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPID_API_HOST,
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data?.summary);
      setSummary(response.data?.summary)
      setStatus(false)
    } catch (error) {
      console.error(error);
      setStatus(false)
    }
  }

  console.log(URL);

  return (
    <div
      className='h-screen w-screen bg-slate-300 flex items-center justify-center flex-col gap-y-10'
    >
      <div className='flex items-center justify-center flex-col gap-y-10'>
        <h1 className='text-4xl text-green-600 font-bold'>Article Summarizer</h1>
        <div
          className='flex gap-x-2'
        >
          <input type='url' placeholder='Enter URL to get the summary!' className='h-10 w-[500px] text-center bg-stone-100 outline-none border border-2 rounded-lg' onChange={handleURLChange} />
          <button
            className='bg-slate-500 w-24 h-10 text-white font-semibold rounded-lg hover:cursor-pointer border border-black mx-auto' onClick={handleArticleSummarize}
          >
            {
              status ? <LuLoaderCircle className='animate-spin mx-auto' size={30}/> : "Summarize"
            }
          </button>
        </div>
      </div>
      <div>
        <p className='h-10 w-[600px] text-wrap'>
          { summary == "" ? "Nothing is there to summarize!" : summary }
        </p>
      </div>
    </div>
  )
}

export default App