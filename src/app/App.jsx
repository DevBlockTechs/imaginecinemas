import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'

function App() {

  return (
    <div className='body'>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
