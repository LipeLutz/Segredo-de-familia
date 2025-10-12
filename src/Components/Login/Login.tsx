import { useState, type FormEvent } from 'react'
import './Login.css'
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../../Firebase/firebaseConfig.js'
import { Link } from 'react-router'


export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='divLogin'>
            <form className='formLogin' onSubmit={handleSubmitLogin}>
                <div className='divEmailLogin'>
                    <label htmlFor="name">Email:</label>
                    <input type="email" id='name' className='inputEmailLogin' onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>

                <div className='divPasswordLogin'>
                    <div className='divInputPassword'>
                        <label htmlFor="password">Senha:</label>
                        <input type={showPassword ? 'text' : 'password'} id='password' className='inputPasswordLogin' onChange={(e) => setPassword(e.target.value)} value={password} required />
                    </div>
                    <div>
                        {showPassword ? <FaRegEye className='iconShowPasswordLogin' onClick={() => setShowPassword(!showPassword)} /> : <FaRegEyeSlash className='iconShowPasswordLogin' onClick={() => setShowPassword(!showPassword)} />}
                    </div>
                </div>


                <div className='divBtnCreateUser'>
                    <button type='submit' className='btnCreateUser'>Entrar</button>
                </div>
                <div className="NAAccount">
                    <p>Ainda não tem uma conta? <Link to="/createAccount">Criar conta</Link></p>
                </div>
            </form>
        </div>

    )
}