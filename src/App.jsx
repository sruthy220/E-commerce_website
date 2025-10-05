import './App.css'
import Header from './Header'
import Content from './components/Content'
import { Route, Routes } from 'react-router-dom'
import BuyNow from './pages/BuyNow'
import CakesList from './pages/CakesList'
import Blog from './pages/Blog'
import Cart from './pages/Cart'; 
import Address from './pages/Address';
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cakes" element={<CakesList />} />
        <Route path="/buy" element={<BuyNow />} />
        <Route path="/blog" element={<Blog/>} />
         <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} /> 
      </Routes>
    </>
  )
}

export default App
