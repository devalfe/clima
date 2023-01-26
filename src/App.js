
import {Fragment} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import {useState, useEffect} from "react";
import Clima from "./components/Clima";
import Error from "./components/Error";
function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState({error:false, mensaje: ""});

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarApi = async () => {

      if(consultar) {
        const appId = "5bfdc2fd6bf658957067fbbf52316466";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsultar(false);

        // Detecta si hubo resultados correctos en la consulta
        console.log(resultado);

        if(resultado.cod === 401) {
          setError({ error: true, mensaje: resultado.message });
        } else {
          setError({ error: false, mensaje: ''});
        }
      }

    }
    consultarApi().then();
  }, [ciudad, consultar, error, pais]);
  console.log(error);
  let componente;

  if(error.error) {
    componente = <Error mensaje={error.mensaje} />
  } else {
    componente = <Clima
      resultado={resultado}
    />
  }
  return (

    <Fragment>
      <Header titulo="Clima react app"
      />
      <div className="contenedor-form" >
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar}/>
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
// Api fd720cb449cb93ab838eaae729ad1a49
