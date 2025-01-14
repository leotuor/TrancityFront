import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import BusCard from '../components/BusCard';
import React, { useState } from 'react';
import Modal from '../components/Modal';

const ALIGN_CARD = {
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
}



function HomePage() {

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", position: "absolute", top: 0, width: "100%" }}>
        <table style={{ margin: 0, padding: 0, marginTop: '-4%'}}>
          <tbody>
            <tr>
              <td style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-5%'}}>
                <img src="/images/logo.png" alt="" style={{ width: "60%" }} />
              </td>
            </tr>
            <tr>
              <td style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <input 
                placeholder="" className="input" 
                onClick={() => setOpenModal(true)}
                style={{ width: '80%', height: '35px', boxShadow: '0px 0px 5px #999' }} 
              />
              </td>
            </tr>
            <tr>
              <td style={{...ALIGN_CARD, marginTop: '2%'}}>
                <BusCard />
              </td>
              <td style={ALIGN_CARD}>
                <BusCard />
              </td>
              <td style={ALIGN_CARD}>
                <BusCard />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal isOpen={openModal}>
      <button 
      style={{ 
        backgroundColor: 'transparent', 
        border: 'none',
        cursor: 'pointer',
        position: 'absolute',
        top: '-2vh',
        right: '0',
        zIndex: 2
      }}
      onClick={() => setOpenModal(false)}
    >
      <Icon path={mdiClose} size={3} style={{color: 'red'}}/>
    </button> 
        <table style={{ marginTop: '-35vh'}}>
          <tbody>
            <tr>
              <td>
                <input 
                  placeholder="" className="input" 
                  style={{width: '70vw', marginTop: '-1%', boxShadow: '0px 0px 5px #999' }} 
                />
              </td>
            </tr>
            <tr>
              <td style={{...ALIGN_CARD, paddingTop: '2vh'}}>
                <BusCard />
              </td>
              <td style={ALIGN_CARD}>
                <BusCard />
              </td>
              <td style={ALIGN_CARD}>
                <BusCard />
              </td>
              <td style={ALIGN_CARD}>
                <BusCard />
              </td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
}	

export default HomePage;