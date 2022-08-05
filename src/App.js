import Login from "./pages/Login/Login";
import { Routes, Route } from 'react-router-dom'
import Header from "./pages/Includes/Header";

function App() {
  return (
  <div className="w-screen min-h-screen">
    <Header />
    <Routes>
      <Route path='/' element={ <Login /> }></Route>
    </Routes>
  </div>
  );
}

export default App;
