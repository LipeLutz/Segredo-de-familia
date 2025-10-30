import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Birds.css'
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

export const Birds = ( {sectionRef, scrollToRef}: Ref ) => {

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
            if(recipe.recipeCategory.includes("birds")){
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divBirdsRecipes">
            <div className='divBirdsRecipesWelcomeText'>
                <div className='birdsRecipesWelcomeText'>
                    <h1 className='birdsRecipesWelcomeTextH1'>Receitas de Aves</h1>
                    <h3 className='birdsRecipesWelcomeTextH3'>Versatilidade e sabor em cada receita</h3>
                    <p className='birdsRecipesWelcomeTextP'>Nesta categoria, você encontra receitas práticas, nutritivas e incrivelmente saborosas, ideais para o dia a dia ou ocasiões especiais.</p>
                    <p className="birdsRecipesWelcomeTextP">Seja grelhado, assado ou refogado, cada preparo revela o melhor do sabor das aves, com temperos equilibrados e aquele toque caseiro que conquista.</p>
                    <p className='birdsRecipesWelcomeTextP'>Explore opções leves, crocantes e cheias de criatividade para deixar suas refeições ainda mais gostosas.</p>
                    <button className='birdsRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='birdsRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList}/>
            </div>
        </div>
    )
}