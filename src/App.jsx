import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {


  return (
    <>
    <Header/>
    <div>
     <Routes>
       <Route path="/login" element={<Login />} />
     </Routes>
     </div>
<Footer/>
    </>
  )
}

export default App
