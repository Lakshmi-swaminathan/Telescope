import { useState } from 'react'
// import drop from '.NavbarComponents/Categorydropdown.js'
// import drop from '.HomepageComponents/Drop.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  LoginPage from './components/loginPage.jsx';
import  SignUpPage from './components/SignUpPage.jsx';
import HomePage from './components/HomePage.jsx';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();


  return (
    <>
      {/* <LoginPage/> */}
      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/LoginPage">Go to Login Page</Link>
            </li>
            <li>
              <Link to="/SignUpPage">Go to SignUp Page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/LoginPage">
            <LoginPage/>
          </Route>
          <Route path="/SignUpPage">
            <SignUpPage />
          </Route>
        </Switch>  */}
        <div>
        {location.pathname !== '/signup' && location.pathname !== '/login' && (
        <nav>
          <ul>
            <li>
            <drop/>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        )}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
        </div>
    </>
  )
}

export default App
