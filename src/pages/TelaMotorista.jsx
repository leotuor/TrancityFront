import React, { useState } from "react";
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js'; // Import correto do ícone
import '../assets/DriveScreen.css';

const DriverScreen = () => {
  const driverInfo = {
    name: "Gabriel Silva",
    cnh: "1234567890",
    line: "Tomazelli",
    plate: "ABC-1234",
    id: "001",
    photo: "https://via.placeholder.com/150" // Link placeholder para a foto
  };

  return (
  <div className="container">
      {/* Box com informações do motorista */}
      <div style={{boxShadow: '0px 0px 50px #999', width: '35vw', height: '50vh', display: 'flex', alignContent:'center', justifyContent:'center', marginTop:'25vh', marginBottom: '25vh', marginLeft:'2vw', marginRight:'2vw', borderRadius:'12px' }}>
      <img src={driverInfo.photo} alt="Foto do Motorista" className="driver-photo" style={{marginLeft:'5vw', marginTop:'12vh', marginLeft: '7.5%'}} />
<table
  style={{
    width: '50%',
    margin: '20px 10px 20px auto', // Alinha à direita usando "auto" no lado esquerdo
    borderCollapse: 'collapse',
    boxShadow: '0px 0px 10px #999',
    borderRadius: '12px',
  }}
>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left',}}>
      <th style={{ padding: '10px', borderBottom: '1px solid #ddd',  borderRadius: '12px' }}></th>
      <th style={{ padding: '10px', borderBottom: '1px solid #ddd', color: 'black',  borderRadius: '12px' }}>Informações Motorista</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: '10px', textAlign: 'Center', fontWeight: 'bold', color: 'black'  }}>Nome:</td>
      <td style={{ padding: '10px', color: 'black' }}>Roberto Arranda</td>
    </tr>
    <tr>
      <td style={{ padding: '10px', textAlign: 'Center', fontWeight: 'bold', color: 'black'  }}>CNH:</td>
      <td style={{ padding: '10px', color: 'black'  }}>01293999950</td>
    </tr>
    <tr>
      <td style={{ padding: '10px', textAlign: 'Center', fontWeight: 'bold', color: 'black'  }}>Linha:</td>
      <td style={{ padding: '10px', color: 'black'  }}>Tomazelli</td>
    </tr>
    <tr>
      <td style={{ padding: '10px', textAlign: 'Center', fontWeight: 'bold', color: 'black'  }}>Placa:</td>
      <td style={{ padding: '10px', color: 'black'  }}>MEI-0243</td>
    </tr>
    <tr>
      <td style={{ padding: '10px', textAlign: 'Center', fontWeight: 'bold', color: 'black'  }}>ID:</td>
      <td style={{ padding: '10px', color: 'black'  }}>001</td>
    </tr>
  </tbody>
</table>
</div>
      {/* Mapa */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.469292470703!2d-122.08424968468142!3d37.42199997982517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24da8f11f81%3A0xa3eeaa1e2e2efabc!2sGoogleplex!5e0!3m2!1sen!2sus!4v1698353585895!5m2!1sen!2sus"
          style={{ border: 0, width: "50vw", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className="App">
      {/* Barra Superior */}
      <div
        style={{
          backgroundColor: '#FFC107',
          height: '5%',
          width: '100%',
          position: 'fixed',
          top: 0,
          zIndex: 1,
          borderBottom: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
        }}
      >
        <Icon style={{ color: 'black' }} path={mdiMenu} size={2} />
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            width: '15%',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '-1%',
          }}
        />
      </div>

      {/* Conteúdo */}
      <DriverScreen />
    </div>
  );
}

export default App;