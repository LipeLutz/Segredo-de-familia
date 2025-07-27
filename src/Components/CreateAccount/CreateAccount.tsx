import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import './CreateAccount.css'
import { LiaTimesSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import type { CreateUserInterface } from '../../Interfaces/CreateUserInterface';
import { DialogError } from '../Dialog/DialogError/DialogError'
import { DialogSuccess } from '../Dialog/DialogSuccess/DialogSuccess';

export const CreateAccount = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerification, setPasswordVerification] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const [passwordLength, setPasswordLength] = useState(false)
    const [passwordNumbers, setPasswordNumbers] = useState(false)
    const [passwordUpperCase, setPasswordUpperCase] = useState(false)
    const [passwordLowerCase, setPasswordLowerCase] = useState(false)
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [dialogText, setDialogText] = useState('')
    const [showDialogSuccess, setShowDialogSuccess] = useState(false)
    const [showDialogError, setShowDialogError] = useState(false)

    const numberRegex = /[0-9]/;
    const uppercaseLetters = /[A-Z]/
    const lowerCaseLetters = /[a-z]/

    useEffect(() =>{
        if(password === passwordVerification){
            setPasswordMatch(true)
        } else{
            setPasswordMatch(false)
        }

    }, [password, passwordVerification])

    const checkPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value
        setPassword(newPassword)

        if(newPassword.length >= 6) {
            setPasswordLength(true)
        } else {
            setPasswordLength(false)
        }
        const hasNumber = [...newPassword].some(number => numberRegex.test(number))
        setPasswordNumbers(hasNumber)

        const hasUppercase = [...newPassword].some(letter => uppercaseLetters.test(letter));
        setPasswordUpperCase(hasUppercase);

        const hasLowerCase = [...newPassword].some(letter => lowerCaseLetters.test(letter))
        setPasswordLowerCase(hasLowerCase)
    }

    const handleSubmitFormUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (passwordLength === true && passwordNumbers === true && passwordUpperCase === true && passwordUpperCase === true && passwordMatch === true) {
            const createUser: CreateUserInterface = {
                name,
                email,
                password
            }

            setDialogText("Conta criada com sucesso ")
            setShowDialogSuccess(true)
            
        } else{
            setDialogText("Por favor, verifique se a sua senha atende aos requisitos obrigatórios para criação de senhas.")
            setShowDialogError(true)
        }
    }

    return (
        <div className="divCreateAccount">
            <DialogSuccess message={dialogText} open={showDialogSuccess} onClose={() => setShowDialogSuccess(false)} />
            <DialogError message={dialogText} open={showDialogError} onClose={() => setShowDialogError(false)}  />
            <div className='createAccount'>
                <div className='divAdvantages'>
                    <h2>Criar conta</h2>
                    <p className='questionAdvantage'>Qual é a vantagem de criar uma conta?</p>
                    <p>Quando você cria uma conta, você pode adicionar receitas, e salvar receitas de outros usuários.</p>
                    <p>Obs: Isso por enquanto... Em breve teremos mais funcionalidades</p>
                </div>
                <form className='formCreateAccount' onSubmit={handleSubmitFormUser}>
                    <div className='divInput'>
                        <label htmlFor="name">Nome de perfil:</label>
                        <input type="text" id='name' onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className='divInput'>
                        <label htmlFor="email">Email de confiança:</label>
                        <input type="email" name="" id="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='divInputIcon'>
                        <div className='divInputPassword'>
                            <div className='divPasswordDoNotMatch'>
                                <label htmlFor="password">Senha:</label>
                                <span className={passwordMatch ? 'spanPasswordMatch' : 'spanPasswordDoNotMatch'}>Senhas não coincidem</span>
                            </div>
                            <input className={passwordMatch ? 'inputPassword' : 'inputPasswordDoNotMatch'} id='password' type={showPassword ? 'text' : 'password'} value={password} onChange={checkPassword} required />
                        </div>
                        <div>
                            {showPassword ? <FaRegEye className='iconShowPassword' onClick={() => setShowPassword(!showPassword)} /> : <FaRegEyeSlash className='iconShowPassword' onClick={() => setShowPassword(!showPassword)} />}
                        </div>
                    </div>
                    <div className='divInputIcon'>
                        <div className='divInputPassword'>
                            <div className='divPasswordDoNotMatch'>
                                <label htmlFor="passwordVerification">Repita sua senha:</label>
                                <span className={passwordMatch ? 'spanPasswordMatch' : 'spanPasswordDoNotMatch'}>Senhas não coincidem</span>
                            </div>
                            <input className={passwordMatch ? 'inputPassword' : 'inputPasswordDoNotMatch'} type={showPassword2 ? 'text' : 'password'} id='passwordVerification' value={passwordVerification} onChange={(e) => setPasswordVerification(e.target.value)} required />
                        </div>
                        <div>
                            {showPassword2 ? <FaRegEye className='iconShowPassword' onClick={() => setShowPassword2(!showPassword2)} /> : <FaRegEyeSlash className='iconShowPassword' onClick={() => setShowPassword2(!showPassword2)} />}
                        </div>
                    </div>

                    <div className='passwordRules'>
                        <p>A senha deve ter:</p>
                        <ul>
                            <li>No mínimo 6 caracteres {passwordLength ? <FaCheck className='iconPositivePassword' /> : <LiaTimesSolid className='iconNegativePassword' />}</li>
                            <li>Números {passwordNumbers ? <FaCheck className='iconPositivePassword' /> : <LiaTimesSolid className='iconNegativePassword' />}</li>
                            <li>Letras maiúsculas {passwordUpperCase ? <FaCheck className='iconPositivePassword' /> : <LiaTimesSolid className='iconNegativePassword' />}</li>
                            <li>Letras minúsculas {passwordLowerCase ? <FaCheck className='iconPositivePassword' /> : <LiaTimesSolid className='iconNegativePassword' />}</li>
                        </ul>
                    </div>

                    <div className='divBtnCreateUser'>
                        <button type='submit' className='btnCreateUser'>Cadastrar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}