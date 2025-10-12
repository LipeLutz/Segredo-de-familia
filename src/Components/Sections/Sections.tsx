import "./Sections.css"
import { Link } from "react-router"
import { auth } from '../../Firebase/firebaseConfig'
import { useAuth } from "../Context/Context"

export const Sections = () =>{

    const user = useAuth()

    return(
        <div className="sections">
            <Link to="/" className="sectionsRoutes"><p>Menu</p></Link>
            <Link to={user ? "/createRecipe" : "/protectedRoute"} className="sectionsRoutes">Adicionar receita</Link>
            <Link to="/savedRecipes" className="sectionsRoutes">Receitas salvas</Link>
        </div>
    )
}