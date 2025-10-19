import { CiSearch } from 'react-icons/ci'
import { Sections } from '../Sections/Sections'
import './Main.css'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState, type SetStateAction } from 'react'
import { db } from "../../Firebase/firebaseConfig.js"
import { Link } from 'react-router'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import IMG from "./assets/piccini-cucina-divulgacao-tagliolini-al-ragu-classico.jpg"

interface Recipe {
    id: string
    recipeName: string
    recipeCategory: string
    file: string
    createdBy: string
}

export const Main = () => {

    const [query, setQuery] = useState<string>("")
    const [recipeList, setRecipeList] = useState<Recipe[]>()
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    const recipeCollection = collection(db, "recipe")

    const categories = [
        { id: "", label: "Todas" },
        { id: "fit", label: "Comidas Fit" },
        { id: "meat", label: "Carnes" },
        { id: "pasta", label: "Massas" },
        { id: "desserts", label: "Sobremesas" },
        { id: "drinks", label: "Drinks" },
        { id: "sauces", label: "Molhos" },
    ]

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

        if (!recipeList?.length) return

        const filteredRecipes = recipeList.filter((recipe) => {
            const matchesQuery = recipe.recipeName.toLowerCase().includes(query.toLowerCase())

            const matchesCategory = selectedCategory === "" || recipe.recipeCategory[0] === selectedCategory

            return matchesQuery && matchesCategory
        })

        setFilteredRecipes(filteredRecipes)
    }, [query, selectedCategory, recipeList])

    const recipesToRender = filteredRecipes.length > 0 || query || selectedCategory ? filteredRecipes : recipeList

    return (
        <div className='main'>
            <div className='divMainWelcome'>
                <div className='divMainWelcomeText'>
                    <h1>Descubra</h1>
                    <h1>deliciosas</h1>
                    <h1>receitas</h1>
                    <h1>caseiras</h1>

                    <p>Segredo de Família é um espaço criado para compartilhar receitas autênticas, cheias de sabor e história.
                        Aqui, cada prato carrega o toque especial de quem cozinha com amor — de receitas tradicionais a novas criações, todas testadas e aprovadas para inspirar você na cozinha.
                    </p>

                    <button className='exploreRecipes'>Explorar receitas</button>
                </div>

                <div className='divMainWelcomeIMG'>
                    <img src={IMG} alt="" className='welcomeIMG' />
                </div>
            </div>

            <div className='divMainCategories'>
                <p>Qual categoria de receita você procura?</p>
            </div>
        </div>
    )
}