import { CiSearch } from 'react-icons/ci'
import { Sections } from '../Sections/Sections'
import './Main.css'
import { collection, getDocs, QuerySnapshot, type DocumentData } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from "../../Firebase/firebaseConfig.js"
import { Link } from 'react-router'

export const Main = () => {

    const [recipeList, setRecipeList] = useState<[]>()

    const recipeCollection = collection(db, "recipe")

    useEffect(() => {
        const getRecipeList = async () => {
            try {
                const data = await getDocs(recipeCollection)

                const filteredData = data.docs.map((doc) => (
                    { ...doc.data(), id: doc.id }
                ))

                setRecipeList(filteredData)
            } catch (error) {
                console.log(error)
            }
        }

        getRecipeList()
    }, [recipeList])

    return (
        <div className='main'>
            <Sections />
            <div className='containerRecipes'>
                <div className='containerRecipesInput'>
                    <input type="text" name="" id="" />
                    <CiSearch className='searchIcon' />
                </div>
                <div className='containerRecipesCategories'>
                    <button className='btnRecipeCategory'>Comidas fit</button>
                    <button className='btnRecipeCategory'>Carnes</button>
                    <button className='btnRecipeCategory'>Massas</button>
                    <button className='btnRecipeCategory'>Sobremesas</button>
                    <button className='btnRecipeCategory'>Drinks</button>
                </div>
                <div className='divChooseRecipe'>
                    {recipeList?.map((recipe, index) => (
                        <div className='divIndividualRecipe' key={index}>
                            <Link to={`/recipeDetails/${recipe.id}`}>
                                <div className='divChooseRecipeIMG'>
                                    <img src={recipe.file} alt="" width="350px" height="300px" />
                                </div>
                                <div className='divChooseRecipeDetails'>
                                    <h2 className='h2ChooseRecipeDetails'>{recipe.recipeName}</h2>
                                    <p className='pChooseRecipeDetails'>Criada por: {recipe.createdBy}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}