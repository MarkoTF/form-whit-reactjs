import React from 'react';
import Portada from './components/Portada.js';
import Seccion from './components/Seccion.js';
import CuadroContenido from './components/CuadroContenido.js';
import BtnPrimary from './components/BtnPrimary';
import Modal from './components/Modal.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datos: [{}],
      cliente_nombre: '',
      cliente_opotunidades: '',
      cliente_objetivo_general: '',
      cliente_espectativas: '',
      cliente_ventajas: '',
      marca_propuesta_valor: '',
      marca_identidad_corporativa: '',
      marca_engagement: '',

      isModalOpen: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleInputChange(e) {
    const nombre = e.target.name;
    this.setState({
      [nombre]: e.target.value,
    });
  }

  handleSubmit(e) {
    if(!this.state.isModalOpen) {
      this.handleModal();
    }
    e.preventDefault();
  }

  handleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {

    return (
      <div className="App">
	<Portada 
	  titulo='El brief del cliente' 
	  subtitulo='Lucía Garza' 
	/>

	<div className="container pb-6">

	  <form onSubmit={this.handleSubmit}>
	    <Seccion titulo="Clientes"></Seccion>

	    <div className="box p-5">
	      <CuadroContenido 
		name='cliente_nombre'
		onChange={this.handleInputChange}
		encabezado="Nombre del cliente" 
		descripcion="Descripción breve acerca del cliente, su historia, servicios y productos"/>

	      <div className="columns my-0">
		<div className="column pr-0 py-0">
		  <CuadroContenido 
		    onChange={this.handleInputChange}
		    name='cliente_opotunidades'
		    encabezado="Declaración de área de oportunidad" 
		    descripcion="En el mercado actual (los usuarios) se encuentran ante (área de oportunidad /problema a resolver) por lo que la propuesta de (nombre de producto o servicio) busca (problemas a resolver por el producto) para llegar a (definición de éxito) de manera eficiente y con (valor agregado)."/>
		</div>
		<div className="column pl-0 py-0">
		  <CuadroContenido
		    name='cliente_objetivo_general'
		    onChange={this.handleInputChange}
		    encabezado='Objetivo general del proyecto'
		    descripcion='(debe ser preciso y corto) Ejemplo: Aumentar el número de suscriptores a servicio'/>
		</div>
	      </div>

	      <CuadroContenido
		name='cliente_espectativas'
		onChange={this.handleInputChange}
		encabezado="Espectativas" 
		descripcion="1. Expectativa primera&#10;2. Expectativa segunda&#10;3. Expectativa tercera&#10;4. Expectativa cuarta&#10;5. Expectativa quinta..."/>

	      <CuadroContenido
		name='cliente_ventajas'
		onChange={this.handleInputChange}
		encabezado="Ventajas competitivas (mencionadas por el cliente)" 
		descripcion="1.&#10;2.&#10;3.&#10;4.&#10;5...."/>
	    </div>


	    <Seccion titulo='Estrategia de marca'/>

	    <div className="box p-5">
	      <CuadroContenido
		name='marca_propuesta_valor'
		onChange={this.handleInputChange}
		encabezado="Estrategia de branding: propuesta de valor" 
		descripcion="Factores que identifican a la marca ante su competencia. Pueden ser relacionados con servicios, frases, historia... todo aquello que el cliente considere que le da un valor agregado a su marca."/>

	      <CuadroContenido 
		name='marca_identidad_corporativa'
		onChange={this.handleInputChange}
		encabezado="Estrategia de branding: identidad corporativa" 
		descripcion="En esta sección se agrega el logo, las fuentes tipográficas, las paleta de colores, la iconografía y todas las referencia a productos existentes, como sitio web, documentos, etc."/>

	      <CuadroContenido
		name='marca_engagement'
		onChange={this.handleInputChange}
		encabezado="Estrategia de branding: engagement" 
		descripcion="En esta sección se agregan elementos implementados dentro del producto, como iconos o frases e imágenes que fomenten la interacción del usuario con la marca."/>
	    </div>

	    <BtnPrimary type='submit' value='Enviar'/>
	  </form>

	  <Modal 
	    className={this.state.isModalOpen ? 'modal is-active' : 'modal'}
	    onClick={this.handleModal}>
	    <p>Hola</p>
	  </Modal>

	</div>

      </div>
    );
  }
}

export default App;
