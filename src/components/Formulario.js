import {useState} from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

  const [error, setError] = useState(false);

  const {ciudad, pais} = busqueda;

  const handleChange = e => {
    setBusqueda(
      {
        ...busqueda,
        [e.target.name]: e.target.value,
      },
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      setConsultar(false);
    } else {
      setError(false);
      setConsultar(true);
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange} /> <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select className="browser-default"
          name="pais"
          id="pais"
          value={pais}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select> <label htmlFor="pais">País: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Formulario.prototype = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired,

};
export default Formulario;
