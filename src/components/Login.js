import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function Login(props) {
  const [correctMail, setCorrectMail] = useState(true)
  const [correctPsw, setCorrectPsw] = useState(true)
  const [auth, setAuth] = useState(localStorage.auth)
  
  function onSubmitForm(e) {
    e.preventDefault()
    const mail = document.getElementById("mail").value
    const psw = document.getElementById("pwd").value
    if((mail === "" || psw === "") || (mail !== 'admin@mail.com' && psw !== 'admin123')) {
      setCorrectMail(false)
      setCorrectPsw(false)
    }
    if(mail === 'admin@mail.com') {
      setCorrectMail(true)
      if(psw === 'admin123') {
        setCorrectPsw(true)
        setAuth(true)
        localStorage.setItem('auth', true)
      }
    }
  }
  if (auth) return <Redirect to='/todos' />
  return (
    <div className="login-container">
      <form className="form">
        <h1>Ingresa!</h1>
        <input id="mail" type="email" placeholder="E-mail" />
        { !correctMail && <span className='error'>Opps! revisa tu email</span> }
        <input id="pwd" type="password" placeholder="Contraseña" />
        { !correctPsw && <span className='error'>Opps! revisa tu contraseña</span> }
        <input onClick={(e) => onSubmitForm(e)} id="anim" type="button" value="Entrar!" />
      </form>
      <style scoped>{`
        form{
          border-radius:20px  20px 0 0 ;
          background: #252525;
          color:#fff;
          position: absolute;
          width: 300px;
          height: 400px;
          top:50%;
          left:50%;
          transform: translate(-50%, -50%);
        }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70vh;
        }
        form h1{
          text-align: center;
          border-bottom: 3px solid lightyellow;
        }        
        #anim {
          animation: bg 2s infinite;
          cursor: pointer;
        }
        @keyframes bg {
          0% {
              background: lightyellow;
          }
          5%{
              background: transparent
          }
          100%{
              background: gray;
          }
        }
      `}</style>
    </div>
  )
}
