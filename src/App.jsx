import React from 'react'
import Navbar from './components/Navbar'
import Myhero from './components/Myhero/Myhero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import My_project from './components/My_project/My_project'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Footerx from './components/Footerx/Footerx'
/*import More_Details from './components/More_Details/More_Details'
/*import Myservices from './components/Myservices_info/Myservices'*/

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Myhero/>}/>
        <Route path='/My_project' element={<Contact/> }/>
        <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>
      <About/>
      <My_project/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footerx/>
    </div>
  )
} 
export default App

