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
      datos:{
	cliente_nombre: {
	  contenido: '',
	  status: 'normal'
	},
	cliente_opotunidades: {
	  contenido: '',
	  status: 'normal'
	},
	cliente_objetivo_general: {
	  contenido: '',
	  status: 'normal'
	},
	cliente_espectativas: {
	  contenido: '',
	  status: 'normal'
	},
	cliente_ventajas: {
	  contenido: '',
	  status: 'normal'
	},
	marca_propuesta_valor: {
	  contenido: '',
	  status: 'normal'
	},
	marca_identidad_corporativa: {
	  contenido: '',
	  status: 'normal'
	},
	marca_engagement: {
	  contenido: '',
	  status: 'normal'
	},
      },
      isModalOpen: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleInputChange(e) {
    const nombre = e.target.name;
    const valor = e.target.value;
    const datos = {...this.state.datos}; //Para clonar y no mutar
    this.setState({
      datos: {
	...datos,
	[nombre]: {
	  contenido: valor,
	  status: 'normal'
	}
      },
    });
  }

  handleSubmit(e) {
    const camposLlenos = revisarCampos(e.target);

    //console.log(this.state.datos);
    if(camposLlenos) {
      console.log(this.state.datos);
      this.handleModal();
    } else {
      const datos = {...this.state.datos};
      let nuevosDatos = {};

      for(let i = 0; i < e.target.length - 1; i++) {
	let nombre = e.target[i].name;

	if(e.target[i].value === '') {
	  nuevosDatos = {
	    ...nuevosDatos, 
	    [nombre]: {
	      contenido: datos.[nombre].contenido,
	      status: 'vacio'
	    }
	  }
	} else {
	  nuevosDatos = {
	    ...nuevosDatos, 
	    [nombre]: {
	      contenido: datos.[nombre].contenido,
	      status: 'lleno'
	    }
	  }
	}
      }

      //console.log(nuevosDatos);
      this.setState({
	datos: nuevosDatos
      });
      console.log(this.state.datos);
      console.log('llenar todos los campos')
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
		status={this.state.datos.cliente_nombre.status}
		value={this.state.datos.cliente_nombre.contenido}
		onChange={this.handleInputChange}
		encabezado="Nombre del cliente" 
		descripcion="Descripción breve acerca del cliente, su historia, servicios y productos"/>

	      <div className="columns my-0">
		<div className="column pr-0 py-0">
		  <CuadroContenido 
		    status={this.state.datos.cliente_opotunidades.status}
		    value={this.state.datos.cliente_opotunidades.contenido}
		    onChange={this.handleInputChange}
		    name='cliente_opotunidades'
		    encabezado="Declaración de área de oportunidad" 
		    descripcion="En el mercado actual (los usuarios) se encuentran ante (área de oportunidad /problema a resolver) por lo que la propuesta de (nombre de producto o servicio) busca (problemas a resolver por el producto) para llegar a (definición de éxito) de manera eficiente y con (valor agregado)."/>
		</div>
		<div className="column pl-0 py-0">
		  <CuadroContenido
		    name='cliente_objetivo_general'
		    status={this.state.datos.cliente_objetivo_general.status}
		    value={this.state.datos.cliente_objetivo_general.contenido}
		    onChange={this.handleInputChange}
		    encabezado='Objetivo general del proyecto'
		    descripcion='(debe ser preciso y corto) Ejemplo: Aumentar el número de suscriptores a servicio'/>
		</div>
	      </div>

	      <CuadroContenido
		name='cliente_espectativas'
		status={this.state.datos.cliente_espectativas.status}
		value={this.state.datos.cliente_espectativas.contenido}
		onChange={this.handleInputChange}
		encabezado="Espectativas" 
		descripcion="1. Expectativa primera&#10;2. Expectativa segunda&#10;3. Expectativa tercera&#10;4. Expectativa cuarta&#10;5. Expectativa quinta..."/>

	      <CuadroContenido
		name='cliente_ventajas'
		status={this.state.datos.cliente_ventajas.status}
		value={this.state.datos.cliente_ventajas.contenido}
		onChange={this.handleInputChange}
		encabezado="Ventajas competitivas (mencionadas por el cliente)" 
		descripcion="1.&#10;2.&#10;3.&#10;4.&#10;5...."/>
	    </div>


	    <Seccion titulo='Estrategia de marca'/>

	    <div className="box p-5">
	      <CuadroContenido
		name='marca_propuesta_valor'
		status={this.state.datos.marca_propuesta_valor.status}
		value={this.state.datos.marca_propuesta_valor.contenido}
		onChange={this.handleInputChange}
		encabezado="Estrategia de branding: propuesta de valor" 
		descripcion="Factores que identifican a la marca ante su competencia. Pueden ser relacionados con servicios, frases, historia... todo aquello que el cliente considere que le da un valor agregado a su marca."/>

	      <CuadroContenido 
		name='marca_identidad_corporativa'
		status={this.state.datos.marca_identidad_corporativa.status}
		value={this.state.datos.marca_identidad_corporativa.contenido}
		onChange={this.handleInputChange}
		encabezado="Estrategia de branding: identidad corporativa" 
		descripcion="En esta sección se agrega el logo, las fuentes tipográficas, las paleta de colores, la iconografía y todas las referencia a productos existentes, como sitio web, documentos, etc."/>

	      <CuadroContenido
		name='marca_engagement'
		status={this.state.datos.marca_engagement.status}
		value={this.state.datos.marca_engagement.contenido}
		onChange={this.handleInputChange}
		encabezado="Estrategia de branding: engagement" 
		descripcion="En esta sección se agregan elementos implementados dentro del producto, como iconos o frases e imágenes que fomenten la interacción del usuario con la marca."/>
	    </div>

	    <BtnPrimary type='submit' value='Enviar'/>
	  </form>

	  <Modal 
	    className={this.state.isModalOpen ? 'modal is-active' : 'modal'}
	    onClick={this.handleModal}>
	    <h1 className='title is-3'>Gracias por llenar el formulario!</h1>
	    <p>Puedes revisar los datos desde la consola del navegador</p>
	  </Modal>

	</div>

      </div>
    );
  }
}

function revisarCampos(campos) {
  for(let i = 0; i < campos.length - 1; i++) {
    if(campos[i].value === '') {
      return false;
    }
  }
  return true;
}

export default App;
