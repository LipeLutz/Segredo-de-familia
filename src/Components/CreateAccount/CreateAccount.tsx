import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import './CreateAccount.css'
import { BsFillEmojiWinkFill } from "react-icons/bs"
import { LiaTimesSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState, type ChangeEvent } from 'react'

export const CreateAccount = () =>{

    const [password, setPassword] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const [passwordLength, setPasswordLength] = useState(false)
    const [passwordNumbers, setPasswordNumbers] = useState(false)
    const [passwordUpperCase, setPasswordUpperCase] = useState(false)
    const [passwordLowerCase, setPasswordLowerCase] = useState(false)

    const numberRegex = /[0-9]/;
    const uppercaseLetters = /[A-Z]/
    const lowerCaseLetters = /[a-z]/

    const checkPassword = (e:ChangeEvent<HTMLInputElement>) =>{
        const newPassword = e.target.value
        setPassword(newPassword)

        if(password.length >= 6){
            setPasswordLength(true)
        } else{
            setPasswordLength(false)
        }

        for(let i = 0; i < newPassword.length; i++){
            if(numberRegex.test(newPassword[i])){
                setPasswordNumbers(true)
            }
        }
        
        for(let i = 0; i < newPassword.length; i++){
            if(uppercaseLetters.test(newPassword[i])){
                setPasswordUpperCase(true)
            }
        }

        for(let i = 0; i < newPassword.length; i++){
            if(lowerCaseLetters.test(newPassword[i])){
                setPasswordLowerCase(true)
            }
        }

    }

    return(
        <div className="divCreateAccount">
            <div className='createAccount'>
                <div className='divAdvantages'>
                    <h2>Criar conta</h2>
                    <p className='questionAdvantage'>Qual é a vantagem de criar uma conta?</p>
                    <p>Quando você cria uma conta, você pode adicionar receitas, e salvar receitas de outros usuários.</p>
                    <p>Obs: Isso por enquanto... Em breve teremos mais funcionalidades</p>
                </div>
                <form className='formCreateAccount'>
                    <div className='divInput'>
                        <label htmlFor="">Nome de perfil:</label>
                        <input type="text" />
                    </div>
                    <div className='divInput'> 
                        <label htmlFor="">Email de confiança:</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className='divInputIcon'>
                        <div className='divInputPassword'>
                            <label htmlFor="">Senha:</label>
                            <input type={showPassword ? 'text' : 'password'} value={password} onChange={checkPassword} />
                        </div>
                        <div>
                            {showPassword ? <FaRegEye className='iconShowPassword' onClick={() => setShowPassword(!showPassword)} /> : <FaRegEyeSlash className='iconShowPassword' onClick={() => setShowPassword(!showPassword)}/>}
                        </div>
                    </div>
                    <div className='divInputIcon'>
                        <div className='divInputPassword'>
                            <label htmlFor="">Repita sua senha:</label>
                            <input type={showPassword2 ? 'text' : 'password'} />
                        </div>
                        <div>
                            {showPassword2 ? <FaRegEye className='iconShowPassword' onClick={() => setShowPassword2(!showPassword2)} /> : <FaRegEyeSlash className='iconShowPassword' onClick={() => setShowPassword2(!showPassword2)}/>}
                        </div>
                    </div>

                    <div className='passwordRules'>
                        <p>A senha deve ter:</p>
                        <ul>
                            <li>No mínimo 6 caracteres {passwordLength ? <FaCheck /> : <LiaTimesSolid />}</li>
                            <li>Números {passwordNumbers ? <FaCheck /> : <LiaTimesSolid />}</li>
                            <li>Letras maiúsculas {passwordUpperCase ? <FaCheck /> : <LiaTimesSolid />}</li>
                            <li>Letras minúsculas {passwordLowerCase ? <FaCheck /> : <LiaTimesSolid />}</li>
                        </ul>
                    </div>
                </form>
            </div>

        </div>
    )
}