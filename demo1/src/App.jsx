import './App.css'
import Header from './components/Header'
import Description from './components/Description'
import Details from './components/Details'
import Form from './components/Form'
import Users from './components/Users'
import Buttons from './components/Buttons'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes}  from 'react-router-dom';
import Search from './components/Search'
import NotFound from './components/NotFound'
import Timer from './components/Timer'



function App() {
    
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Navbar /><Description/></>} />
      <Route path="/gallery" element={<><Navbar /><Gallery/></>} />
      <Route path="/form" element={<><Navbar /><Form/> <Timer/></>} />
      <Route path="/search/:value" element={<><Navbar /><Search/></>} />
      <Route path='*' element={<><Navbar /><NotFound /></>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}



export default App
