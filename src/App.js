import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import ThreadList from './components/ThreadList'
import Navbar from './components/ForumNavbar'
import Footer from './components/ForumFooter'
import Register from './pages/Register';
import Signin from './pages/Signin'
import MyPage from './pages/MyPage'
import ProtectedRoute from './routes/ProtectedRoute'
import ForumContextProvider from './contexts/ForumContextProvider'

const App = () => {
  return (
    <div className="App">
      <ForumContextProvider>
        <Router>   
          <Navbar/>              
            <div className="content">
              <Routes>
                <ProtectedRoute exact path='/mypage' component={MyPage} />    
                <Route path="/" element={<Home/>} />                  
                <Route path="/:id" element={<ThreadList/>} />  
                <Route path="/register" element={<Register/>} />  
                <Route path="/signin" element={<Signin/>} />                             
              </Routes>
            </div>   
          <Footer/>                 
        </Router>
      </ForumContextProvider>
    </div>
  );
}

export default App;