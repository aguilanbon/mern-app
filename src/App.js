import Login from "./pages/Login/Login";
import { Routes, Route } from 'react-router-dom'
import Header from "./pages/Includes/Header";
import Footer from "./pages/Includes/Footer";
import Home from "./pages/Home/Home";
import { GlobalHelperProvider } from "./helpers/GlobalHelperContext";

function App() {
  return (
    <GlobalHelperProvider>
      <div className="w-auto min-h-screen bg-bg">
        {/* <Header /> */}
          <Routes>
            <Route path='/' element={ <Login /> }></Route>
          </Routes>
          <Routes>
            <Route path='/home' element={ <Home /> }></Route>
          </Routes>
        {/* <Footer /> */}
      </div>
    </GlobalHelperProvider>
  );
}

export default App;
