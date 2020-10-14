import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  //definir la categoria y noticias

  const[categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  useEffect(() => {
    const consultaAPI = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=1ceddb3526dc405e970fad7d4ae12e87`;
      const respuesta = await fetch(url);

      const noticias= await respuesta.json();

      guardarNoticias(noticias.articles)
    }
    consultaAPI();
  }, [categoria])
  return (
    <Fragment>
      <Header
       titulo="Buscador de noticias por categoria"
      />
      <div className="container white">
        <Formulario 
        guardarCategoria = {guardarCategoria}
        />
        <ListadoNoticias
        noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
