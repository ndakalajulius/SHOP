import React from 'react'
  import './App.css'
  import Navbar from './Components/Navbar';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Contact from './Components/Pages/Contact';
  import Category from './Components/Pages/Category';
  import About from './Components/Pages/About';
  import SignUp from './Components/Pages/SignUp';
  import Home from './Components/Pages/Home';
  import Categories_data from './Components/Pages/Categories_data';
  
  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/html' element={<Category data={Categories_data.html} />} />
          <Route path='/css' element={<Category data={Categories_data.css} />} />
          <Route path='/javascript' element={<Category data={Categories_data.javascript} />} />
          <Route path='/web-development' element={<Category data={Categories_data.web_development} />} />
          <Route path='/category' element={<Category data={Categories_data.all_category} />} />
        </Routes>
      </Router>
  
    )
  }
  
  export default App;