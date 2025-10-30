import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Soups.css'
import { collection, getDocs } from 'firebase/firestore'

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

interface Ref {
    sectionRef: React.RefObject<null>
    scrollToRef: () => void
}

export const Soups = ( {sectionRef, scrollToRef}: Ref ) => {

    const [recipeList, setRecipeList] = useState<Recipe[]>()
    const [filteredRecipeList, setfilteredRecipeList] = useState<Recipe[]>([])

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

    useEffect(() =>{
        const recipeFilter = recipeList?.filter((recipe) =>{
            if(recipe.recipeCategory.includes("soups")){
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divSoupsRecipes">
            <div className='divSoupsRecipesWelcomeText'>
                <div className='soupsRecipesWelcomeText'>
                    <h1 className='soupsRecipesWelcomeTextH1'>Sopas</h1>
                    <h3 className='soupsRecipesWelcomeTextH3'>Conforto e sabor em cada colherada</h3>
                    <p className='soupsRecipesWelcomeTextP'>Perfeitas para dias frios (ou para quem ama uma refeição leve e nutritiva), nossas sopas são cheias de sabor e personalidade.</p>
                    <p className='soupsRecipesWelcomeTextP'>Experimente, aqueça-se e descubra o prazer das receitas que abraçam.</p>
                    <button className='soupsRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='soupsRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList}/>
            </div>
        </div>
    )
}