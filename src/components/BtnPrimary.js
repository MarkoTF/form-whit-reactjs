function BtnPrimary(props) {
  return(
    <button 
      className="button is-info is-large"
      type={props.type}>
      <span className="icon has-text-primary">
	<i className="fas fa-paper-plane"></i>
      </span>
      <span className="is-family-secondary has-text-primary">{props.value}</span>
    </button>
  );
}

export default BtnPrimary;
