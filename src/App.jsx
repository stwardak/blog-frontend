import './App.css'

import { Content } from "./Content"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Login } from './Login';
import { LogoutLink } from './LogoutLink';
import { Signup } from './Signup';
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Signup/>
        <Login/>
        <LogoutLink/>
        <Header/>
        <Content/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;