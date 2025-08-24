import './ProtectedRoute.css' 
import { Link } from "react-router"

export const ProtectedRoute = () =>{
    return(
        <div className="containerProtectedRoute">
            <div className="protectedRoute">
                <h3>Ops, você não está autenticado...</h3>

                <div className="divRegisterProtectedRoute">
                    <div className='protectedRouteCreateAccount'>
                        <p>Para usar essa funcionalidade, você precisa se registrar</p>
                        <Link to='/createAccount'>Criar conta</Link>
                    </div>
                    <div>
                        <p>Já tem conta?</p>
                        <button>Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}