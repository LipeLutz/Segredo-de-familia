import "./Sections.css"
import { Link } from "react-router"

export const Sections = () =>{
    return(
        <div className="sections">
            <Link to="/" className="sectionsRoutes"><p>Menu</p></Link>
            <Link to="/createRecipe" className="sectionsRoutes">Adicionar receita</Link>
            <Link to="/savedRecipes" className="sectionsRoutes">Receitas salvas</Link>
            {/* <button>Sair</button> */}
        </div>
    )
}