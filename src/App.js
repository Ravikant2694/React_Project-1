
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import Client from './Component/Client'
import Services from './Component/Services'
import ContactUs from './Component/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="client" element={<Client />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}   

export default App