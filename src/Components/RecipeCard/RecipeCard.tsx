import "./RecipeCard.css"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/firebaseConfig.js"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { CiHeart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa"
import type { CreateRecipeInterface } from "../../Interfaces/CreateRecipeInterface.js"

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

    return (
        <div className="divRecipeCard">
            {filteredRecipeList?.length === 0 ?
                <div>
                    <p>Nenhuma receita adicionada com essa categoria :(</p>

                    <p>Quer ser o primeiro? Clique no botão abaixo, e adicione já sua receita</p>
                    <button>Adicionar receita</button>
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