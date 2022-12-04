import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Header/Navbar';
import ItemListContainer from './Components/Header/Products/ItemListContainer';
//import Carousel from './Components/Main/Carousel';
import Intro from './Components/Main/Intro';
import Clients from './Components/Main/Comments/Clients';
import Form from './Components/Main/Form';
import Footer from './Components/Footer/Footer';
import Error404 from './Error404';
import ItemDetailContainer from './Components/Header/Products/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar  tagUno={"Quiénes Somos"} tagDos={"Productos"} tagTres={"Clientes"} tagCuatro={"Contáctanos"}/>
      {/* <Carousel imgUno={{img:"./images/lake.jpg", altUno:"Imagen provisoria de lago"}} imgDos={{img:"./images/mountain1.jpg", altDos:"Imagen provisoria de montaña 1"}} imgTres={{img:"./images/mountain2.jpg", altTres:"Imagen provisoria de montaña 2"}}/> */}
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"/Quienes-Somos"} element={<Intro/>}/>
        <Route path={"/Clientes"} element={<Clients/>}/>
        <Route path={"/Contáctanos"} element={<Form/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
