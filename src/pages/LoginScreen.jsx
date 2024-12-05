import { useEffect, useState } from "react";


const LoginScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await fetch('http://localhost:3333/usuario');
      const dados = await res.json();
      setItems(dados);
      console.log(items);
      
    } catch (error) {
      console.log(error.message);
    }
  }
  
  fetchUser();
  }, []);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const getEmail = (event) => {
    setEmail(event.target.value);
  }

  const getPassword = (event) => {
    setPassword(event.target.value);
    localStorage.setItem('isLogged', 'true');
  }

  const handleSubmit = () => {
    if (items.data.some((user) => user.email == email && user.senha == password)) {
      console.log('Usuário logado');
    }else{
      console.log('Usuário não encontrado');
    }
  }

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
                  onChange={(e) => getEmail(e)}
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
                    marginBottom: '10vh',
                  }}
                  onChange={(e) => getPassword(e)}
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
                  onClick={handleSubmit}
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
}

export default LoginScreen;