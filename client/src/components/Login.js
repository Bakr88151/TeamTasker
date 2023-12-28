import React from 'react'
import '../styles/login.css'
import { useState } from 'react'

function Login() {

    const [login, setlogin] = useState(true)// a state to store if user is in login screen or create account screen true for login
    const [loginValues, setLoginValues] = useState({UN: '', PW: ''})// to store the inputs values for the login form
    const [CreateAccountValues, SetCreateAccountvalues] = useState({UN: '', PW: '', PWC: ''})// to store the inputes values for the create form

    // to handle the change of values in the Login form and store them in loginValues state
    const handleloginChange = (event, target) => {
        if (target === 'un'){
            setLoginValues(prev => {
                return {...prev, UN: event.target.value}
            })
        }else if (target === 'pw') {
            setLoginValues(prev => {
                return {...prev, PW: event.target.value}
            })
        }
        };

    // to handle the change of values in the create account form and store them in CreateAccountValues state
    const handleCreateChange = (event, target) => {
        if (target === 'un'){
            SetCreateAccountvalues(prev => {
                return {...prev, UN: event.target.value}
            })
        }else if (target === 'pw') {
            SetCreateAccountvalues(prev => {
                return {...prev, PW: event.target.value}
            })
        }else if (target === 'cpw') {
            SetCreateAccountvalues(prev => {
                return {...prev, CPW: event.target.value}
            })
        }
        };

  return (
    <div>
        {login?
        (<form className='LoginForm'>
            <h1>Login</h1>

            <input id='usernameInput' placeholder='Username'
            onChange={(e) => handleloginChange(e, 'un')} value={loginValues.UN} />

            <input id='password' type='password' placeholder='Password'
            onChange={(e) => handleloginChange(e, 'pw')} value={loginValues.PW} />

            <button id='login' type='submit'>Login</button>
            <span onClick={() => setlogin(false)}>Create Account</span>
        </form>):
        (<form className='CreateAccountForm'>
            <h1>Create Aaccount</h1>
            <input id='usernameInput' placeholder='Username'
            onChange={(e) => handleCreateChange(e, 'un')} value={CreateAccountValues.UN} />

            <input id='password' type='password' placeholder='Password'
            onChange={(e) => handleCreateChange(e, 'pw')} value={CreateAccountValues.PW} />

            <input id='confirmPassword' type='password' placeholder='Confirme Password'
            onChange={(e) => handleCreateChange(e, 'cpw')} value={CreateAccountValues.cpw} />
            <button id='login' type='submit'>Create Account</button>
            <span onClick={() => setlogin(true)}>I ahve an account</span>
        </form>)}
    </div>
  )
}

export default Login