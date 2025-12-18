import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { List } from './pages/List'
import { Create } from './pages/Create'
import { Edit } from './pages/Edit'
import { ListCategories } from './pages/ListCategories'
import { CreateCategory } from './pages/CreateCategory'
import { EditCategory } from './pages/EditCategory'

import './App.css'

function App() {
  // routing
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          <Route path='/categories' element={<ListCategories/>}></Route>
          <Route path='/create-category' element={<CreateCategory/>}></Route>
          <Route path='/edit-category/:id' element={<EditCategory/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
