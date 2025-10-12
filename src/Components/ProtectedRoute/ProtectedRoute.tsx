import './ProtectedRoute.css' 
import { Link } from "react-router"

export const ProtectedRoute = () =>{
    return(
        <div className="containerProtectedRoute">
            <div className="protectedRoute">
                <h2>Ops, você não está autenticado...</h2>

                <div className="divRegisterProtectedRoute">
                    <div className='protectedRouteCreateAccount'>
                        <p>Para usar essa funcionalidade, você precisa se registrar</p>
                        <Link to='/createAccount' className='btnProtectedRouteCreateAccount'>Criar conta</Link>
                    </div>
                    <div className='protectedRouteLogin'>
                        <p>Já tem conta?</p>
                        <Link to="/login" className='btnProtectedRouteLogin'>Entrar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}