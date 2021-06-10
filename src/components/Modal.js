function Modal(props) {
  return(
    <div className={props.className}>
      <div className="modal-background" onClick={props.onClick}></div>
      <div className="modal-content">
	<div className='box'>
	  {props.children}
	</div>
      </div>
      <button 
	className="modal-close is-large"
	onClick={props.onClick}
	aria-label="close"></button>
    </div>
  );
}

export default Modal;
