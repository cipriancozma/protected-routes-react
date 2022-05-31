import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from './components/Explore'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Protected from './components/Protected'
import Sidebar from './components/Sidebar'
import Watch from './components/Watch'

import "./global.css"

function Root() {
    const [ loogedIn, setLoggedIn ] = useState(false);

  return (
      <div className='flex min-vh-100'>
          <div className='pa3 sidebar'>
            <Sidebar />
          </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={
                <Protected loggedIn={loogedIn}>
                    <Profile />
                </Protected>
               } 
                />
                <Route path="/watch">
                    <Route path=':id' element={<Watch />}/>
                </Route>
                <Route path="/login" element={<Login loggedIn={loogedIn} setLoggedIn={setLoggedIn}/>} />
            </Routes>
      </div>
    
  )
}

export default Root