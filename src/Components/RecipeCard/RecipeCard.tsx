import "./RecipeCard.css"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/firebaseConfig.js"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { CiHeart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa"
import type { CreateRecipeInterface } from "../../Interfaces/CreateRecipeInterface.js"
import { useAuth } from "../Context/Context.js"

interface Recipe {
    id: string
    recipeName: string
    recipeDescription: string
    recipeCategory: string
    file: string
    createdBy: string
    addedDate: {
        addedDay: number,
        addedMonth: number,
        addedYear: number,
        addedTime: number
    }
}

export const RecipeCard = ({ filteredRecipeList }) => {

    const user = useAuth()

    return (
        <div className="divRecipeCard">
            {filteredRecipeList?.length === 0 ?
                <div className="noRecipes">
                    <h2 className="noRecipesH2">Infelizmente ainda não foi adicionada nenhuma receita com essa categoria :(</h2>

                    <p className="noRecipesP">Quer ser o primeiro? Clique no botão abaixo, e adicione já sua receita</p>
                    <Link to={user ? "/createRecipe" : "/createAccount"}>
                        <button className="noRecipesBtn">Adicionar receita</button>
                    </Link>
                </div> :
                filteredRecipeList?.map((recipe: Recipe) => (
                    <>
                        <Link to={`/recipeDetails/${recipe.id}`}>
                            <div className="recipeCard" key={recipe.id}>
                                <div className="divRecipeCardIMG">
                                    <img src={recipe.file} alt="" />
                                </div>
                                <div className="divRecipeCardDetails">
                                    <h2 className="h2RecipeCardDetails">{recipe.recipeName}</h2>

                                    <p className="pRecipeCardDetails">{recipe.recipeDescription}</p>
                                    <p className="pRecipeCardDetails">Criada por: {recipe.createdBy}</p>
                                    <button className="btnSaveRecipeIcon">
                                        Salvar Receita
                                        <CiHeart className="saveRecipeIcon" />
                                    </button>
                                </div>

                            </div>
                        </Link>
                    </>
                ))}
        </div>
    )
}