import "./RecipeCard.css"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/firebaseConfig.js"
import { useEffect, useState } from "react"
import { Link } from "react-router"

interface Recipe {
    id: string
    recipeName: string
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

export const RecipeCard = () => {

    const [recipeList, setRecipeList] = useState<Recipe[]>()
    const [filteredRecipeList, setfilteredRecipeList] = useState<Recipe[]>()

    const recipeCollection = collection(db, "recipe")

    useEffect(() => {
        const getRecipeList = async () => {
            try {
                const data = await getDocs(recipeCollection)
                const recipes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setRecipeList(recipes)
            } catch (error) {
                console.log("Erro ao buscar as receitas: ", error)
            }
        }

        getRecipeList()
    }, [])

    useEffect(() => {
        const sortedRecipes = recipeList?.sort((a, b) => b.addedDate.addedTime - a.addedDate.addedTime);

        const latestRecipes = sortedRecipes?.slice(0, 5);

        setfilteredRecipeList(latestRecipes)

    }, [recipeList])

    return (
        <div className="divRecipeCard">
            {filteredRecipeList?.map((recipe) => (
                <div className="recipeCard" key={recipe.id}>
                    <Link to={`/recipeDetails/${recipe.id}`}>
                        <div className="divRecipeCardIMG">
                            <img src={recipe.file} alt="" />
                        </div>
                        <div className="divRecipeCardDetails">
                            <h2 className="h2RecipeCardDetails">{recipe.recipeName}</h2>
                            <p className="pRecipeCardDetails">Criada por: {recipe.createdBy}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}