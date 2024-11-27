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
  paddingTop: '45vh',
  paddingBottom: '45vh',
  paddingLeft: '45%',
  paddingRight: '45%',
  borderRadius: '15px',
  boxShadow: '0px 0px 80px #999',
  backgroundColor: '#fff',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}

function Modal({isOpen, children}) {
  if (isOpen) {
    return(
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>{children}</div>
      </div>
      );
  }
}

export default Modal;