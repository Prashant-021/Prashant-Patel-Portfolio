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
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-4">
          <Navbar />

          {/* Page content goes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App