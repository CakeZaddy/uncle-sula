import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import { useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

function App() {
  const [darkToggle, setDarkToggle] = useState(false)

  return (
    <body
      class={`relative dark:bg-slate-800 dark:text-white ${
        darkToggle && 'dark'
      }`}
    >
      <div class='float'>
        <MdDarkMode
          onClick={() => setDarkToggle(true)}
          class='absolute top-[80px] left-5 text-3xl dark:hidden '
        />
        <MdLightMode
          onClick={() => setDarkToggle(false)}
          class='absolute top-[80px] left-5 text-3xl hidden dark:block '
        />
      </div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </body>
  )
}

export default App
