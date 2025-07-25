import './Main.css'

export const Main = () =>{
    return(
        <div className='main'>
            
                <div className='chooseRecipe'>
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
    )
}

/*

    {recipeList.length === 0 ? "Nenhuma receita adicionada ainda :(" : recipeList.map((recipe: RecipeProps) =>())}
*/