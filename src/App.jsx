import './App.css'
import { Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Board from './pages/Board'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import BoardDetail from './pages/BoardDetail'
import Community from './pages/Community'
import CommunityDetail from './pages/CommunityDetail'
import Footer from './components/Footer'
function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/board' element={<Board/>} />
        <Route path='/board/:id' element={<BoardDetail/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/community/:id' element={<CommunityDetail/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App