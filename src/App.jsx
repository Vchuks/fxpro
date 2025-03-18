import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element ={
      <Home/>
      }/>
      <Route path='*' element={<p className='text-center p-20 text-5xl font-[aristbold]'>Page Not Found!</p>}/>
    </Routes>
    </>
  )
}

export default App
