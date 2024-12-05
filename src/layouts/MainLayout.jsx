import { Outlet  } from "react-router-dom";
import { mdiMenu, mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const MainLayout = () => {
  const [isLogged] = useState(localStorage.getItem('isLogged') === 'true');
  const navigate = useNavigate();

  const goToMotorista = () => {
    navigate('/tela-motorista');
  };
  const goToHome = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Outlet />
      <div
        style={{
          backgroundColor: '#FFC107',
          height: '5%',
          width: '100%',
          position: 'fixed',
          marginLeft: '-1%',
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
          alt=""
          style={{
            width: '15%',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '-1%',
            cursor: 'pointer',
          }}
          onClick={() => goToHome()}
        />
        <Icon
          style={{ color: 'black', marginLeft: '93vw', cursor: 'pointer' }}
          path={mdiAccount}
          size={2}
          onClick={isLogged ? goToMotorista : goToLogin}
        />
      </div>
    </>
  );
};

export default MainLayout;