import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2023/08/1920x910-Blog-Header-1-1-1280x640.jpg"className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="https://www.wearethemighty.com/uploads/legacy/assets.rbl.ms/17310616/origin.jpg?auto=webp&optimize=high&quality=70&width=1440" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 9)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>This is a new paragraph!!!</p>
    </>
  )
}

export default App
