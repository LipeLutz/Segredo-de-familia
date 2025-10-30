import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import "./Meat.css"
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

export const Meat = ({sectionRef, scrollToRef}: Ref) => {

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
            if (recipe.recipeCategory.includes("meat")) {
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])

    console.log(filteredRecipeList)


    return (
        <div className="divMeatRecipes">
            <div className='divMeatRecipesWelcomeText'>
                <div className='meatRecipesWelcomeText'>
                    <h1 className='meatRecipesWelcomeTextH1'>Receitas de carne</h1>
                    <h3 className='meatRecipesWelcomeTextH3'>Sabor e suculência em cada pedaço</h3>
                    <p className='meatRecipesWelcomeTextP'>Aqui você encontra receitas de carne que exaltam o sabor, a textura e o prazer de uma boa refeição. São opções preparadas com técnicas que valorizam o ponto certo e o tempero ideal, para transformar qualquer momento em uma experiência marcante.</p>
                    <p className='meatRecipesWelcomeTextP'>Seja um churrasco entre amigos, um jantar especial ou aquele almoço reforçado, nossas receitas de carne garantem sabor e presença à mesa.</p>
                    <p className='meatRecipesWelcomeTextP'>Explore cortes, modos de preparo e descubra novas formas de saborear o melhor das carnes.</p>
                    <button className='meatRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='meatRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList} />
            </div>
        </div>
    )
}