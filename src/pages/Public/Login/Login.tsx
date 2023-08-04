import { getMorty } from '../../../services';
import { useDispatch } from 'react-redux';
import { UserKey, createUser, resetUser } from '../../../redux/states/user';
import { PrivateRoutes, PublicRoutes, Roles } from '../../../models';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { clearLocalStorage } from '../../../utilities';
import '../../../styles/pages/Login.scss'
import Navbar from '../../../components/Nabvar/Navbar';
import React, { useState } from 'react';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    // navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      // navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
    } catch (error) { }
  }

  // -------------------------------------------------------------------------

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para autenticar al usuario.
    // Por ejemplo, puedes hacer una solicitud a un servidor con las credenciales ingresadas.
    console.log('Username:', username);
    console.log('Password:', password);

    // Aquí puedes realizar la lógica de autenticación y redirección a la página de inicio después del inicio de sesión exitoso.
  };



  // -----------------------------

  return (
    <div className='containerLogin'>
      <Navbar isLoggedIn={true}></Navbar>


      <div className="login-container"> 
        <div className="login-form"> 
          <h2>LOGIN</h2>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>




    </div>
  )
}

export default Login;