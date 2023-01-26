
const Clima = ({resultado}) => {
  const {name, main} = resultado;
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El Clima de {name} es: </h2>
        <p className="temperatura">
          {main.temp}
        </p>
      </div>

    </div>
  );
}
export default Clima
