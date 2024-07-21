import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from './Components/Hero'
import Sign from './Components/Sign'
import Post from './Components/Post'
import Header from './Components/Header'
import Blog from './Components/Blog'
import Edit from './Components/Edit'
import Delete from './Components/Delete'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>

<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Hero/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/sign' element={<Sign/>}></Route>
  <Route path='/post' element={<Post/>}></Route>

<Route path='/edit/:id' element={<Edit/>}></Route>


<Route path='/delete/:id' element={<Delete/>}></Route>

</Routes>
<Footer/>
</BrowserRouter>

    </div>
  )
}

export default App