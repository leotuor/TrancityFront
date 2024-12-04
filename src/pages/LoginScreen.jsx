const LoginScreen = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          marginTop: '25vh',
          paddingLeft: '10vw',
          paddingRight: '9vw',
          boxShadow: '0px 0px 30px #999',
          borderRadius: '25px',
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
              <h2 style={{ textAlign: 'center', marginLeft: '-2vw', marginTop: '5vh'}}>Email</h2>
                <input
                  placeholder=""
                  className="input"
                  style={{
                    width: '25vw',
                    height: '3vh',
                    boxShadow: '0px 0px 5px #999',
                    marginLeft: '-2vw',
                    marginBottom: '6vh',
                    
                  }}
                />
                <h2 style={{ textAlign: 'center', marginLeft: '-2vw'}}>Senha</h2>
                <input
                  placeholder=""
                  className="input"
                  style={{
                    width: '25vw',
                    height: '3vh',
                    boxShadow: '0px 0px 5px #999',
                    marginLeft: '-2vw',
                    marginBottom: '10vh', // Espaço abaixo do segundo input
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  style={{
                    backgroundColor: '#FFC107',
                    color: 'black',
                    marginLeft: '-1.7vw',
                    padding: '0.5vh 2vw',
                    marginBottom: '7vh',
                  }}
                >
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginScreen;
