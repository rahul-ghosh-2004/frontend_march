import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Blog from './components/Blog/Blog.jsx'
import Team from './components/Team/Team.jsx'
import FAQ from './components/FAQ/FAQ.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Team />
      },
      {
        path:"/blog",
        element: <Blog />
      },
      {
        path: "/faq",
        element: <FAQ />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
