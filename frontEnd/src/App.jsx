import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      {/* Toaster should be outside Routes but inside BrowserRouter */}
      <Toaster 
        position="top-right"
      />
      
      <Routes>
        {/* User Layout Router */}
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
        
        {/* Admin Layout Router */}
        <Route>
          {/* Add admin routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App