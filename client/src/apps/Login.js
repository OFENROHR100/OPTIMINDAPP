import './App.css';
import './Login.css';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Login() {

    const [data, setData] = useState(null);

    useEffect(() => {
      makeApiCall();
    }, []);
  
    function makeApiCall() {
      fetch('http://127.0.0.1/loginuser')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }

    console.log(data
        );
  

  return (
    <div className="Login">
        <Header></Header>
        <div className='loginconflictwrapper'>
        <div className='loginwrapper'>
            <div className='logincontainer'>
                <div className='logindescription'>
                    <h1 className='logintitle'>SemmelBrothers - Login</h1>
                    <p>Loggen Sie sich jetzt in ihren Account ein oder erstellen Sie einfach einen neuen, um ihre Brötchen auf einen neuen, angenehmeren Weg zu bestellen.</p>
                </div>
                <div className='loginfield'>
                    <input type="text" className='Email' id="Email" name="Email" placeholder='Email'></input> <br/><br/>
                    <input type="text" className='Password' id="Password" name="Password" placeholder='Passwort'></input> <br/><br/>
                    <a className='register'>Haben Sie noch keinen Account? Dann registrieren Sie sich hier!</a> <br/><br/>
                    <a className='login-button'>Einloggen</a>
                </div>
            </div>
        </div>
        <div className='loginmedia'>
            <img className='loginimage' src='https://i.ibb.co/Fh4s4mW/undraw-Access-account-re-8spm.png'></img>
        </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Login;
