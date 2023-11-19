import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Education from './pages/Education';
import Resume from './pages/Projects';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <>
      <Router>
          <header className=' grid w-full  pt-3'>
            <nav className="mx-auto my-auto  w-full">
            <ul className="flex justify-around">
              <li className=' text-xl font-semibold text-white'>
                <Link to='/Home' className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg py-1 px-4 focus:ring-4 focus:ring-white ">Home</Link>
              </li>
              
              <li className=' text-xl font-semibold text-white'>
                <Link to="/pages/About" className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg py-1 px-4 focus:ring-4 focus:ring-white ">About</Link>
              </li>
              <li className='text-xl font-semibold text-white'>
                <Link to="/pages/Education" className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg py-1 px-4 focus:ring-4 focus:ring-white ">Education</Link>
              </li>
             
              <li className=' text-xl font-semibold text-white focus:ring-2 focus:ring-blue-600'>
                <Link to="/pages/Projects" className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg py-1 px-4 focus:ring-4 focus:ring-white ">Projects</Link>
              </li>
              
            </ul>
            </nav>
            </header>
            
           <Routes >
                <Route exact path='*' element={< Home />}></Route> 
                <Route exact path='/pages/About' element={<About />}></Route>
                <Route exact path='/pages/Education' element={<Education />}></Route>
                <Route exact path='/pages/Projects' element={<Resume />}></Route>
              
            </Routes>
         
          
      </Router>
    </>
  </React.StrictMode>
);


