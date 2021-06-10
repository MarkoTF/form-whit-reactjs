function Portada (props) {
  return(
    <section className="hero is-primary is-fullheight mb-6">
      <div className="hero-body">
	<div>
	  <h1 className="title is-1 is-family-secondary">{props.titulo}</h1>
	  <h2 className="subtitle is-3">{props.subtitulo}</h2>
	</div>
      </div>
    </section>
  );
}

export default Portada;
