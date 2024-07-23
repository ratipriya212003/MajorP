import './App.css';
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Help from "./pages/Help";
import Owner from "./pages/Owners";
function App() {
  return (
    <div className="App">
       <Navbar/>
     <hr/>
     <div className='app-content'>
     <Sidebar/>
     <Routes>
          <Route path="/addproduct" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path='/owners' element={<Owner/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
