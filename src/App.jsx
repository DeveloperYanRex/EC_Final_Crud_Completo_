import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { List } from './pages/List'
import { Create } from './pages/Create'

import './App.css'

function App() {
  // routing
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
