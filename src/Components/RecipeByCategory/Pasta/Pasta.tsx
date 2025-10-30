import { useEffect, useState } from 'react'
import { RecipeCard } from '../../RecipeCard/RecipeCard.js'
import { db } from "../../../Firebase/firebaseConfig.js"
import './Pasta.css'
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

export const Pasta = ( { sectionRef, scrollToRef }: Ref ) => {

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
            if(recipe.recipeCategory.includes("pasta")){
                setfilteredRecipeList([recipe])
            }
        })

        recipeFilter
    }, [recipeList])


    return (
        <div className="divPastaRecipes">
            <div className='divPastaRecipesWelcomeText'>
                <div className='pastaRecipesWelcomeText'>
                    <h1 className='pastaRecipesWelcomeTextH1'>Receitas de Massas</h1>
                    <h3 className='pastaRecipesWelcomeTextH3'>O conforto que vem do sabor</h3>
                    <p className='pastaRecipesWelcomeTextP'>Massas sempre têm um espaço especial à mesa — e aqui elas ganham destaque com receitas cheias de cor, aroma e tradição. De molhos clássicos a combinações criativas, cada prato é pensado para trazer aquele sabor acolhedor que todo mundo ama.</p>
                    <p className='pastaRecipesWelcomeTextP'>Perfeitas para almoços em família, jantares românticos ou dias em que você só quer algo delicioso e reconfortante.</p>
                    <p className='pastaRecipesWelcomeTextP'>Explore massas leves, integrais, recheadas e surpreenda-se com novas combinações de sabores.</p>
                    <button className='pastaRecipesWelcomeTextBtn' onClick={scrollToRef}>Explorar receitas</button>
                </div>
            </div>

            <div className='pastaRecipes' ref={sectionRef}>
                <RecipeCard filteredRecipeList={filteredRecipeList}/>
            </div>
        </div>
    )
}