import './App.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

import { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen p-6 relative">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Navbar />
        {/* Mobile sidebar drawer */}
        <div className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden overflow-scroll`}>
          <div className="p-4">
            <button onClick={() => setSidebarOpen(false)} className="text-black text-lg font-bold mb-4">✕</button>
            <Sidebar />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Desktop sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
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
    </Router>
  )
}

export default App
