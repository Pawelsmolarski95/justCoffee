import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom"
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Container from "./components/pages/Container/Container";
import FeaturedProducts from "./components/pages/FeaturedProducts/FeaturedProducts";
import Home from "./components/pages/Home/Home";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import store from "./redux/store";
import './styles/global.scss';

const App = () => {
  
  
  return (
    <main>
      <Provider store={store}>
        <Header />
          <Container>
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/featuredproducts" element={<FeaturedProducts/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Container>
          <Footer/>
      </Provider>
    </main>
  );
};


export default App;
