import { Outlet  } from "react-router-dom";
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';

const MainLayout = () => {
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
          }}>
        <Icon style={{ color: 'black' }} path={mdiMenu} size={2} />
        <img
          src="/images/logo.png"
          alt=""
          style={{
            width: '15%',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '-1%'
          }}
        />
      </div>
    </>
  );
}

export default MainLayout;