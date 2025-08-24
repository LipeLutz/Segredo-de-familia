import "./Sections.css"
import { Link } from "react-router"
import { auth } from '../../Firebase/firebaseConfig'

export const Sections = () =>{

    console.log(auth.currentUser)

    return(
        <div className="sections">
            <Link to="/" className="sectionsRoutes"><p>Menu</p></Link>
            <Link to={auth.currentUser === 'null' ? "/protectedRoute" : "/createRecipe"} className="sectionsRoutes">Adicionar receita</Link>
            <Link to="/savedRecipes" className="sectionsRoutes">Receitas salvas</Link>
            {/* <button>Sair</button> */}
        </div>
    )
}