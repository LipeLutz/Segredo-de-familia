import './Header.css'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router';
import { auth } from '../../Firebase/firebaseConfig.js'
import { useAuth } from '../Context/Context.js';

export const Header = () => {

    const user = useAuth()

    return (
        <div className="header">
            <div className="divLogo">
                <Link to='/' className='linkDivLogo'>
                    <h2 className='h2Secret'>Segredo de</h2>
                    <h2 className="h2Family">Família</h2>
                </Link>
            </div>

            <nav className="headerNav">
                {user ?
                    <Link to='/myProfile'>
                        <CgProfile className="profileIcon" />
                    </Link>
                    :
                    <Link to='/createAccount'>Criar perfil</Link>
                }
            </nav>
        </div>
    )
}