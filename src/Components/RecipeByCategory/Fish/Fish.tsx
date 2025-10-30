import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Fish.css'
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

export const Fish = ({ sectionRef, scrollToRef }: Ref) => {

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
            if (recipe.recipeCategory.includes("fish")) {
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divFishRecipes">
            <div className='divFishRecipesWelcomeText'>
                <div className='fishRecipesWelcomeText'>
                    <h1 className='fishRecipesWelcomeTextH1'>Receitas de peixes</h1>
                    <h3 className='fishRecipesWelcomeTextH3'>Leveza e frescor direto do mar</h3>
                    <p className='fishRecipesWelcomeTextP'>Descubra pratos que combinam a leveza dos peixes com sabores únicos e irresistíveis. Aqui você encontra receitas saudáveis, cheias de frescor e com aquele toque especial que remete à culinária costeira.</p>
                    <p className='fishRecipesWelcomeTextP'>Inspire-se, explore novos temperos e leve o melhor do mar para o seu prato.</p>
                    <button className='fishRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='fishRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList} />
            </div>
        </div>
    )
}