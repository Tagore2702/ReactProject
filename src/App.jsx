import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Navbar from './Navbar'
import DoctorDetails from './DoctorDetails'
import AddDoctor from './AddDoctor'
import EditDoctor from './EditDoctor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/AddDoctor" element={<AddDoctor />} />
          <Route path="/edit/:id" element={<EditDoctor />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}