import './App.css'

import { Content } from "./Content"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Signup } from './Signup';




function App() {
  return (
    <div>
      <Signup/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;