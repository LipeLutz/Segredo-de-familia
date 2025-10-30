import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './SideDishes.css'
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

export const SideDishes = ({ sectionRef, scrollToRef }: Ref) => {

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

    useEffect(() => {
        const recipeFilter = recipeList?.filter((recipe) => {
            if (recipe.recipeCategory.includes("side-dishes")) {
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divSideDishesRecipes">
            <div className='divSideDishesRecipesWelcomeText'>
                <div className='sideDishesRecipesWelcomeText'>
                    <h1 className='sideDishesRecipesWelcomeTextH1'>Acompanhamentos</h1>
                    <h3 className='sideDishesRecipesWelcomeTextH3'>O toque que completa seu prato</h3>
                    <p className='sideDishesRecipesWelcomeTextP'>Nenhum prato está completo sem um bom acompanhamento!
                        Aqui você encontra receitas que elevam qualquer refeição, com sabores que equilibram e realçam o prato principal.</p>
                    <p className='sideDishesRecipesWelcomeTextP'>Descubra novas combinações e dê aquele toque especial às suas criações culinárias.</p>
                    <button className='sideDishesRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='sideDishesRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList} />
            </div>
        </div>
    )
}