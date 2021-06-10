function CuadroContenido(props) {

  let status;
  if(props.status === 'vacio') {
    status = <p className="help is-danger px-4">Segurate de llenar este campo</p>;
  } else if(props.status === 'lleno') {
    status = <p className="help is-success px-4">Este campo ha sido llenado correctamente</p>;
  } else {
    status = '';
  }

  return(
    <div className="card my-2 px-1">
      <div className="card-header border-b">
	<div className="card-header-title is-family-secondary pb-1">{props.encabezado}</div>
      </div>
      {status}
      <div className="card-content px-1 py-1">
       <textarea 
	  className="textarea has-fixed-size pt-0" 
	  onChange={props.onChange}
	  name={props.name} 
	  placeholder={props.descripcion} 
	  value={props.value}
	  rows="10"></textarea> 
      </div>
    </div>
  );
}

export default CuadroContenido;
