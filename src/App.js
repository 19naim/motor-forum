import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import ThreadList from './components/ThreadList'
import Navbar from './components/ForumNavbar'
import Footer from './components/ForumFooter'

import ForumContextProvider from './contexts/ForumContextProvider'

const App = () => {
  return (
    <div className="App">
      <ForumContextProvider>
        <Router>   
          <Navbar/>              
            <div className="content">
              <Routes>         
                <Route path="/" element={<Home/>} />                  
                <Route path="/:id" component={<ThreadList/>} />                                 
              </Routes>
            </div>   
          <Footer/>                 
        </Router>
      </ForumContextProvider>
    </div>
  );
}

export default App;