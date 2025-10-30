import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Drinks.css'
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

export const Drinks = ( {sectionRef, scrollToRef}: Ref ) => {

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
            if(recipe.recipeCategory.includes("drinks")){
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divDrinksRecipes">
            <div className='divDrinksRecipesWelcomeText'>
                <div className='drinksRecipesWelcomeText'>
                    <h1 className='drinksRecipesWelcomeTextH1'>Bebidas</h1>
                    <h3 className='drinksRecipesWelcomeTextH3'>Refrescantes, criativas e cheias de sabor</h3>
                    <p className='drinksRecipesWelcomeTextP'>Das opções naturais e energéticas às combinações mais elaboradas, aqui você encontra bebidas que transformam qualquer ocasião.</p>
                    <p className="drinksRecipesWelcomeTextP">Perfeitas para acompanhar suas receitas ou para aproveitar sozinhas, nossas bebidas unem frescor, aroma e um toque de sofisticação.</p>
                    <p className='drinksRecipesWelcomeTextP'>Descubra novas combinações e prepare drinks e refrescos que agradam todos os paladares.</p>
                    <button className='drinksRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='drinksRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList}/>
            </div>
        </div>
    )
}