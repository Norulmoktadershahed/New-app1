import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/login.jsx"
import List from "./pages/List/list.jsx"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route index element={<Home/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="list" element={<List/>}></Route>
    </Routes>
  </BrowserRouter> 
    
    </div>
  );
}

export default App;
