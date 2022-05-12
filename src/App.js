import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from  './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/layout/Footer';
import User from './pages/User';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';

const  App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router className='bg-purple-500'>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <Alert/>
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>  
  )
}

export default App;