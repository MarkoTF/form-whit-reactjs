function CuadroContenido(props) {
  return(
    <div className="card my-2 px-1">
      <div className="card-header border-b">
	<div className="card-header-title is-family-secondary">{props.encabezado}</div>
      </div>

      <div className="card-content px-1 py-1">
       <textarea 
	  className="textarea has-fixed-size" 
	  onChange={props.onChange}
	  name={props.name} 
	  placeholder={props.descripcion} 
	  rows="10"></textarea> 
      </div>
    </div>
  );
}

export default CuadroContenido;
