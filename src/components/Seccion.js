function Seccion(props) {
  return(
    <div className="box has-background-info mt-6 mb-3">
      <h2 className='title is-2 has-text-centered is-family-secondary has-text-primary'>
	{ props.titulo }
      </h2>
    </div>
  );
}

export default Seccion;
