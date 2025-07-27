import './Header.css'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router';

export const Header = () =>{

    return(
        <div className="header">
            <div className="divLogo">
                <h2>Segredo de</h2>
                <h2 className="spanLarica">Família</h2>
            </div>

            <nav className="headerNav">
                <Link to='/createRecipe'>Adicionar Receita</Link>
                <Link to='./createAccount'>Criar perfil</Link>
                <a href="#">Meu perfil <CgProfile className="profileIcon"/></a>
            </nav>
        </div>
    )
}