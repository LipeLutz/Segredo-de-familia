import './PostCard.css'

export const PostCard = () => {
    return (
        <div className='divRecipe'>
            <div>
                <img alt="" className='divOmeletteImage' />
                <h1>Titulo da receita</h1>

                <p className='recipeDescription'>
                    Descrição da receita
                </p>

                <div className='divPreparationTime'>
                    <h3>Tempo de Preparo</h3>
                    <ul>
                        <li>
                            <strong>Preparation</strong>: Tempo de preparo da receita
                        </li>
                        <li>
                            <strong>Cooking</strong>: Tempo de cozimento da receita
                        </li>
                    </ul>

                </div>

                <div className='divIngredients'>
                    <h1 className='titleRecipeInfos'>Ingredients</h1>

                    <ul>
                        <li>Lista de ingredientes</li>
                    </ul>

                </div>

                <div className='divInstructions'>
                    <h1 className='titleRecipeInfos'>Instructions</h1>
                    <div>
                        (
                        <div className='stepsList'>

                            <ol>
                                <li>lista de intruções</li>
                            </ol>

                        </div>
                        )



                    </div>
                </div>

                <div className='divNutrition'>
                    <h1 className='titleRecipeInfos'>Nutrition</h1>
                    <h4>The table below shows nutritional values per serving without the additional fillings.</h4>
                    <div>
                        <div className='nutritionalInfos'>
                            <p className='nutrients'>Calories</p>
                            <p className='nutrientsNumbers'>kcal</p>
                        </div>

                        <div className='nutritionalInfos'>
                            <p className='nutrients'>Carbs</p>
                            <p className='nutrientsNumbers'>g</p>
                        </div>

                        <div className='nutritionalInfos'>
                            <p className='nutrients'>Protein</p>
                            <p className='nutrientsNumbers'>g</p>
                        </div>

                        <div className='nutritionalInfos'>
                            <p className='nutrients'>Fat</p>
                            <p className='nutrientsNumbers'>g</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}