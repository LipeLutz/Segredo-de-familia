import './RecipeDetails.css'

import { db } from "../../Firebase/firebaseConfig.js"
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { CreateRecipeInterface } from '../../Interfaces/CreateRecipeInterface.js'

export const RecipeDetails = () => {

    const { id } = useParams()

    const [recipeList, setRecipeList] = useState<[]>()

    const recipeCollection = collection(db, "recipe")

    useEffect(() => {
        const getRecipeList = async () => {
            try {
                const data = await getDocs(recipeCollection)

                const filteredData = data.docs.map((doc) => (
                    { ...doc.data(), id: doc.id }
                ))

                const filteredRecipe = filteredData.filter((recipe) => recipe.id === id)

                setRecipeList(filteredRecipe)
            } catch (error) {
                console.log(error)
            }
        }

        getRecipeList()
    }, [id])

    return (
        <div className='divRecipe'>
            {recipeList?.map((recipe: CreateRecipeInterface) => (
                <div className='recipe' key={recipe.id}>
                    <div className='divRecipeIMG'>
                        <img alt={recipe.recipeName} src={recipe.file} className='recipeIMG' />
                    </div>
                    <h1 className='recipeName'>{recipe.recipeName}</h1>

                    <p className='recipeDescription'>
                        {recipe.recipeDescription}
                    </p>

                    <div className='divPreparationTime'>
                        <h3 className='h3PreparationTime'>Tempo de Preparo</h3>
                        <ul>
                            <li>
                                <strong>Tempo de preparo da receita</strong>: {recipe.prepTime}
                            </li>
                            <li>
                                <strong>Tempo de cozimento da receita</strong>: {recipe.cookingTime}
                            </li>
                        </ul>

                    </div>

                    <div className='divIngredients'>
                        <h1 className='h3Ingredients'>Ingredientes</h1>

                        {recipe.ingredientsList.map((ingredientsList, index) => (
                            <ul key={index}>
                                <li>{ingredientsList}</li>
                            </ul>
                        ))}

                    </div>

                    <div className='divInstructions'>
                        <h1 className='titleRecipeStepList'>Instruções</h1>
                        <div className='stepsList'>
                            <ol>
                                {recipe.instructionsList.map((instructionsList, index) => (
                                    <li key={index}>{instructionsList}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className='divNutrition'>
                        <h1 className='titleNutrition'>Macros</h1>
                        <h4>A tabela abaixo mostra os valores nutricionais da receita completa.</h4>
                        <div>
                            <div className='nutritionalInfos'>
                                <p className='nutrients'>Calorias</p>
                                <p className='nutrientsNumbers'>{recipe.calories}kcal</p>
                            </div>

                            <div className='nutritionalInfos'>
                                <p className='nutrients'>Carboidratos</p>
                                <p className='nutrientsNumbers'>{recipe.carbs}g</p>
                            </div>

                            <div className='nutritionalInfos'>
                                <p className='nutrients'>Proteínas</p>
                                <p className='nutrientsNumbers'>{recipe.proteins}g</p>
                            </div>

                            <div className='nutritionalInfos'>
                                <p className='nutrients'>Gordura</p>
                                <p className='nutrientsNumbers'>{recipe.fat}g</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}