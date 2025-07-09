import './App.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen px-6">
        <Header />
        <Navbar />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Sidebar />
          <main className="flex-1 p-4 col-span-2 bg-white rounded-xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router >
  )
}

export default App