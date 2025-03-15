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
    </Routes>
    </>
  )
}

export default App
