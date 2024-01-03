
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
