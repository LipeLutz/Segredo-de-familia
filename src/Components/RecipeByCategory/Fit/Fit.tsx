import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Fit.css'
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
    sectionFitRef: React.RefObject<null>
    scrollToFitRef: () => void
}

export const Fit = ( {sectionFitRef, scrollToFitRef}: Ref ) => {

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

    useEffect(() =>{
        const recipeFilter = recipeList?.filter((recipe) =>{
            if(recipe.recipeCategory.includes("fit")){
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divFitRecipes">
            <div className='divFitRecipesWelcomeText'>
                <div className='fitRecipesWelcomeText'>
                    <h1 className='fitRecipesWelcomeTextH1'>Receitas Fit</h1>
                    <h3 className='fitRecipesWelcomeTextH3'>Sabor e equilíbrio no mesmo prato</h3>
                    <p className='fitRecipesWelcomeTextP'>Descubra o melhor da culinária saudável sem abrir mão do sabor! Aqui você encontra receitas leves, nutritivas e perfeitas para quem busca manter o foco, cuidar da saúde e aproveitar cada refeição com prazer</p>
                    <p className='fitRecipesWelcomeTextP'>Explore, salve suas favoritas e prove que comida saudável pode (e deve!) ser deliciosa.</p>
                    <button className='fitRecipesWelcomeTextBtn' onClick={scrollToFitRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='fitRecipes' ref={sectionFitRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList}/>
            </div>
        </div>
    )
}