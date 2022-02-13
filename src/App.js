import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import ThreadList from './components/ThreadList'

import ForumContextProvider from './contexts/ForumContextProvider'

const App = () => {
  return (
    <div className="App">
      <ForumContextProvider>
        <Router>              
            <div className="content">
              <Routes>         
                <Route path="/" element={<Home/>} />                  
                <Route path="/:id" component={<ThreadList/>} />                                 
              </Routes>
            </div>                  
        </Router>
      </ForumContextProvider>
    </div>
  );
}

export default App;