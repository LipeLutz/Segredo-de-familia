import "./LatestRecipes.css"

import { RecipeCard } from "../RecipeCard/RecipeCard"

export const LatestRecipes = () =>{
    return(
        <div className="divLatestRecipes">
            <h2>Últimas receitas adicionadas</h2>
            <RecipeCard />
        </div>
    )
    
}