import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Desserts.css'
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

export const Desserts = ({ sectionRef, scrollToRef }: Ref) => {

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
            if (recipe.recipeCategory.includes("desserts")) {
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divDessertsRecipes">
            <div className='divDessertsRecipesWelcomeText'>
                <div className='dessertsRecipesWelcomeText'>
                    <h1 className='dessertsRecipesWelcomeTextH1'>Sobremesas</h1>
                    <h3 className='dessertsRecipesWelcomeTextH3'>O final perfeito para qualquer refeição</h3>
                    <p className='dessertsRecipesWelcomeTextP'>Nada melhor do que encerrar uma boa refeição com um toque doce.
                        Aqui você encontra sobremesas que encantam pelo sabor, pela leveza e pela criatividade</p>
                    <p className='dessertsRecipesWelcomeTextP'>Explore, experimente e descubra o prazer de preparar (e saborear) o doce final perfeito.</p>
                    <button className='dessertsRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='dessertsRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList} />
            </div>
        </div>
    )
}