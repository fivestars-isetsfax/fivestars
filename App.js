
import './App.css';
import Menu from './Component/Menu';
//
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import {Link} from "react-router-dom";
import Listarticles from './Component/Articles/Listarticle';
import Listcategorie from './Component/Categorie/Listcategorie';
import ListScategorie from './Component/Scategorie/ListScategorie';
import Insertarticle from './Component/Articles/Insertarticle';
import InsertScategorie from './Component/Scategorie/InsertScategorie';
import Insertcategorie from './Component/Categorie/Insertcategorie';
function App() {
  return (
    <BrowserRouter>
    
      <Menu/>
      

      <Routes>
<Route path="/Articles" element={<Listarticles/>}/>
<Route path="/Categorie" element={<Listcategorie/>}/>
<Route path="/Scategorie" element={<ListScategorie/>}/>
<Route path="/Insertarticle" element={<Insertarticle/>}/>
<Route path="/Insertcategorie" element={<Insertcategorie/>}/>
<Route path="/InsertScategorie" element={<InsertScategorie/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
