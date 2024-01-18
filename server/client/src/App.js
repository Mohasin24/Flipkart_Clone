import Cart from "./components/cart/Cart";
import ProductDetailView from "./components/details/ProductDetailView";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataContextProvider from "./context/DataContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  // const hideFooterRoutes = ["/product/cart"]
  
  // const hideFooter = hideFooterRoutes.includes(window.location.pathname)
 
  return (

    <DataContextProvider>

      <BrowserRouter >

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailView />} />
          <Route path="/product/cart" element={<Cart />} />
        </Routes>

        {/* {
          
          !hideFooter && <Footer />
        } */}

<Footer />
      </BrowserRouter >

    </DataContextProvider >
  );
}

export default App;
