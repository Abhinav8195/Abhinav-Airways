import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Layout from './components/layout/Layout'
import Results from './components/results/Results'

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      
          <Route path="/" element={<Layout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/results" element={<Results/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App