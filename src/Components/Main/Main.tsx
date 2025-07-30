import { CiSearch } from 'react-icons/ci'
import { Sections } from '../Sections/Sections'
import './Main.css'

export const Main = () =>{
    return(
        <div className='main'>
                <Sections />
                <div className='containerRecipes'>
                    <div className='containerRecipesInput'>
                        <input type="text" name="" id="" />
                        <CiSearch className='searchIcon' />
                    </div>
                    <div className='containerRecipesCategories'>
                        <button className='btnRecipeCategory'>Comidas fit</button>
                        <button className='btnRecipeCategory'>Carnes</button>
                        <button className='btnRecipeCategory'>Massas</button>
                        <button className='btnRecipeCategory'>Sobremesas</button>
                        <button className='btnRecipeCategory'>Drinks</button>
                    </div>
                    <div className='divChooseRecipe'>
                        <div className='divChooseRecipeIMG'>
                            {/*Div da imagem */}
                            {/* <img src={recipe.file} alt="" width='100%' height='100%'/> */}
                        </div>
                        <div className='divChooseRecipeDetails'>
                            <h2>Título da receita</h2>
                            <p>Descrição da receita</p>
                    </div>
                    </div>
                </div>
        </div>
    )
}

/*

    {recipeList.length === 0 ? "Nenhuma receita adicionada ainda :(" : recipeList.map((recipe: RecipeProps) =>())}
*/