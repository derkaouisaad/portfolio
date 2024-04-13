import './App.css';
import {BrowserRouter,Routes,Route}from'react-router-dom'
import { Portfolio } from './pages/Portfolio';
import { Navbare } from './components/navbar/Navbar';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div>      
  <BrowserRouter>
    <div className='XD'>
   <Navbare />
   <Routes>
      <Route path="/" element={<Portfolio/>} />
      
    </Routes>
   <Footer />
   </div>
</BrowserRouter>
    </div>
  );
}

export default App;
