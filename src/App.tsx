import { useState } from 'react'

import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./paginas/login/Login";
import ListaTema from "./components/temas/listatema/ListaTema";
import ListaPostagem from "./components/postagem/listapostagem/ListaPostagem";
import CadastroPost from './components/postagem/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagem/deleterPostagem/DeletarPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';



  function App() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: "70vh" }}>
          <Routes>
            {" "}
            // Antigo Switch
            <Route path="/" element={<Login />} />
            
            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastro" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
          
        </div>
        <Footer />
      </BrowserRouter>
      </Provider>
    );
  }

  export default App