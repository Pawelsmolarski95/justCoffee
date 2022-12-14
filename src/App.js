import { Routes, Route } from "react-router-dom"
import './App.css';
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Container from "./components/pages/Container/Container";
import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";



;

const App = () => {
  
  
  return (
    <main>
      <Header />
      <Container>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Container>
      <Footer/>
    </main>
    
  )
}


export default App;
