import Login from "./pages/Login/Login";
import { Routes, Route } from 'react-router-dom'
import Header from "./pages/Includes/Header";
import Footer from "./pages/Includes/Footer";

function App() {
  return (
  <div className="w-auto h-auto bg-gray-200">
    <Header />
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
      </Routes>
    <Footer />
  </div>
  );
}

export default App;
