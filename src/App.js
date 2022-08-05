import Login from "./pages/Login/Login";
import { Routes, Route } from 'react-router-dom'
import Header from "./pages/Includes/Header";
import Footer from "./pages/Includes/Footer";
import Home from "./pages/Home/Home";

function App() {
  return (
  <div className="w-auto h-auto bg-gray-200">
    <Header />
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
      </Routes>
      <Routes>
        <Route path='/home' element={ <Home /> }></Route>
      </Routes>
    <Footer />
  </div>
  );
}

export default App;
