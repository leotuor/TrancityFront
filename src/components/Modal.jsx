const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}


const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  bottom: '50%',
  left: '50%',
  right: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '150px',
  borderRadius: '15px',
  boxShadow: '0px 0px 80px #999',
  backgroundColor: '#fff',
}

function Modal({isOpen}) {
  if (isOpen) {
    return(
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>asdasd</div>
      </div>
      );
  }
}

export default Modal;