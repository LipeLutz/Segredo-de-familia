import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Cake.css'
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

export const Cake = ({ sectionRef, scrollToRef }: Ref) => {

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
            if (recipe.recipeCategory.includes("cake")) {
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divCakeRecipes">
            <div className='divCakeRecipesWelcomeText'>
                <div className='cakeRecipesWelcomeText'>
                    <h1 className='cakeRecipesWelcomeTextH1'>Bolos e Tortas</h1>
                    <h3 className='cakeRecipesWelcomeTextH3'>Amor em cada fatia</h3>
                    <p className='cakeRecipesWelcomeTextP'>Para acompanhar o café, celebrar momentos especiais ou simplesmente adoçar o dia, bolos e tortas são sempre uma boa pedida. Aqui você encontra receitas fofinhas, úmidas e cheias de sabor</p>
                    <p className='cakeRecipesWelcomeTextP'>Encontre o sabor que combina com o seu momento e leve o cheirinho de bolo recém-saído do forno para a sua cozinha.</p>
                    <button className='cakeRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='cakeRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList} />
            </div>
        </div>
    )
}