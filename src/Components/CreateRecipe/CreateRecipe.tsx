import { useState, type ChangeEvent, type FormEvent } from 'react'
import './CreateRecipe.css'
import { Link } from 'react-router'
import { addDoc, collection, Firestore } from 'firebase/firestore'
import { db } from "../../Firebase/firebaseConfig"
import { useAuth } from '../Context/Context.js'
import imageCompression from 'browser-image-compression'

export const CreateRecipe = () => {

    const [ingredientsToggle, setIngredientsToggle] = useState(false)
    const [instructionsToggle, setInstructionsToggle] = useState(false)


    const [file, setFile] = useState<string | ArrayBuffer | null>(null)
    const [recipeName, setRecipeName] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [prepTime, setPrepTime] = useState("")
    const [cookingTime, setCookingTime] = useState("")

    const [ingredient, setIngredient] = useState("")
    const [ingredientsList, setIngredientsList] = useState<string[]>([])

    const [instruction, setInstruction] = useState("")
    const [instructionsList, setInstructionsList] = useState<string[]>([])

    const [recipeCategory, setRecipeCategory] = useState<string[]>([])

    const [calories, setCalories] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [proteins, setProteins] = useState(0)
    const [fat, setFat] = useState(0)

    const recipeCollection = collection(db, "recipe")

    const handleInputIMG = async (e: ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 800,
                useWebWorker: true,
            };

            const compressedFile = await imageCompression(file, options);

            const reader = new FileReader();
            reader.onload = () => {
                setFile(reader.result); 
            };
            reader.readAsDataURL(compressedFile);

        } catch (error) {
            console.error("Erro ao comprimir imagem:", error);
        }
    }

    const handleIngredients = () => {
        ingredient !== '' ? setIngredientsList((oldIngredient) => [...oldIngredient, ingredient]) : alert("Digite algo antes de enviar")
        setIngredient("")
    }

    const handleInstructions = () => {
        instruction !== '' ? setInstructionsList((oldInstruction) => [...oldInstruction, instruction]) : alert("Digite algo antes de enviar")
        setInstruction("")
    }

    const user = useAuth()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (ingredientsList.length < 1) {
            setIngredientsToggle(true)
        } else if (instructionsList.length < 1) {
            setInstructionsToggle(true)
        } else {
            try {

                await addDoc(recipeCollection, {
                    file,
                    recipeName,
                    recipeDescription,
                    prepTime,
                    cookingTime,
                    ingredientsList,
                    instructionsList,
                    calories,
                    carbs,
                    proteins,
                    fat,
                    createdBy: user?.displayName
                })

                setFile(null)
                setRecipeName("")
                setRecipeDescription("")
                setPrepTime("")
                setCookingTime("")
                setIngredient("")
                setIngredientsList([])
                setInstructionsList([])
                setInstruction("")
                setCalories(0)
                setCarbs(0)
                setProteins(0)
                setFat(0)
                setIngredientsToggle(true)
                setInstructionsToggle(true)

            } catch (error) {
                console.log(error)
            }
        }

    }

    return (
        <>
            <dialog className="dialogSuccess">
                <div className='modalSuccess'>
                    <div className='testandoo'>
                        <p>Receita adicionada com sucesso!</p>
                        <p>Deseja criar outra receita?</p>
                        <div className='modalDivBtnYesNo'>
                            <button className='modalSuccesYes'>Sim</button>
                            <Link to='/' className='modalSuccesNo' >
                                Não
                            </Link>
                        </div>
                    </div>
                </div>
            </dialog>

            <div className='mainCreateRecipe'>
                <form onSubmit={handleSubmit}>
                    <div className='divCreateRecipe'>
                        <div>
                            <label>
                                <input type="file" accept='image/*' className='imgCreateRecipeInput' onChange={(e) => handleInputIMG(e)} />
                                <div className='divCreateRecipeImg'>
                                    {file ? <img src={file as string} className='createRecipeImg' /> : 'Coloque aqui uma imagem de sua receita (opcional)'}
                                </div>
                            </label>
                        </div>
                        <div className='createRecipeName'>
                            <label htmlFor="recipeName">
                                Nome da Receita:
                            </label>
                            <input type='text' required name='recipeName' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                        </div>
                        <div className='createRecipeDescription'>
                            <label htmlFor="recipeDescription">Descrição:</label>
                            <textarea name="recipeDescription" value={recipeDescription} required id="" placeholder='Faça uma breve descrição sobre o que se trata a receita' onChange={(e) => setRecipeDescription(e.target.value)} />
                        </div>

                        <div className='divCreatePreparationTime'>
                            <h3>Tempo de preparo</h3>
                            <ul>
                                <li>
                                    <strong>Tempo de preparo</strong>: <input type="text" value={prepTime} required name="" id="" onChange={(e) => setPrepTime(e.target.value)} />
                                </li>

                                <li>
                                    <strong>Tempo de cozimento</strong>: <input type="text" value={cookingTime} name="" required id="" onChange={(e) => setCookingTime(e.target.value)} />
                                </li>
                            </ul>

                        </div>

                        <div className='divCreateIngredients'>
                            <h1 className='titleCreateRecipeInfos'>Ingredientes</h1>
                            {ingredientsList!.length === 0 ? '' : ingredientsList!.map((ingredient, index) => (
                                <ul key={index}>
                                    <li >{ingredient}</li>
                                </ul>
                            ))}
                            <div>
                                <div className={ingredientsToggle ? 'divIngredientsWarning' : 'divIngredientsWarningDisabled'}>
                                    <p>Adicione no mínimo 3 ingredientes para enviar a receita</p>
                                </div>

                                <div className='titleCreateRecipeInfosDiv'>
                                    <input type="text" className={ingredientsToggle ? 'warning' : ''} onChange={(e) => setIngredient(e.target.value)} value={ingredient} />
                                    <button type='button' onClick={() => handleIngredients()}>Adicionar ingrediente</button>
                                </div>
                            </div>
                        </div>

                        <div className='divCreateInstructions'>
                            <h1 className='titleCreateRecipeInfos'>Passo a passo</h1>
                            <ol>
                                {instructionsList!.length === 0 ? '' : instructionsList!.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ol>
                            <div>
                                <div className={instructionsToggle ? 'divIngredientsWarning' : 'divIngredientsWarningDisabled'}>
                                    <p>Adicione no mínimo 3 passos para enviar a receita</p>
                                </div>

                                <div className='createStepsList'>
                                    <input type="text" className={instructionsToggle ? 'warning' : ''} name="" id="" onChange={(e) => setInstruction(e.target.value)} value={instruction} />
                                    <button type='button' onClick={() => handleInstructions()}>Adicionar instrução</button>
                                </div>
                            </div>
                        </div>

                        <div className='divRecipeCategory'>
                            <h3 className='recipeCategoryH3'>Qual categoria essa receita pertence?</h3>

                            <div className='divInputsCheckBox'>
                                <div className='divCheckBox'>
                                    <input type="checkbox" value="fit" name="" id="fit" />
                                    <label htmlFor="fit">Receitas fit</label>
                                </div>
                                <div className='divCheckBox'>
                                    <input type="checkbox" name="" id="meat" />
                                    <label htmlFor="meat">Carnes</label>
                                </div>
                                <div className='divCheckBox'>
                                    <input type="checkbox" name="" id="pasta" />
                                    <label htmlFor="pasta">Massas</label>
                                </div>
                                <div className='divCheckBox'>
                                    <input type="checkbox" name="" id="desserts" />
                                    <label htmlFor="desserts">Sobremesas</label>
                                </div>
                                <div className='divCheckBox'>
                                    <input type="checkbox" name="" id="drinks" />
                                    <label htmlFor="drinks">Drinks</label>
                                </div>
                                <div className='divCheckBox'>
                                    <input type="checkbox" name="" id="sauces" />
                                    <label htmlFor="sauces">Molhos</label>
                                </div>
                            </div>    
                        </div>

                        <div className='divCreateNutrition'>
                            <h1 className='titleCreateRecipeInfos'>Informações nutricionais (opcional)</h1>
                            <div>
                                <div className='createNutritionalInfos'>
                                    <p className='createNutrients'>Calorias</p>
                                    <input type="number" value={calories} name="" className='createNutrientsNumbers' onChange={(e) => setCalories(Number(e.target.value))} />
                                </div>
                                <div className='createNutritionalInfos'>
                                    <p className='createNutrients'>Carboidratos</p>
                                    <input type="number" name="" value={carbs} className='createNutrientsNumbers' onChange={(e) => setCarbs(Number(e.target.value))} />
                                </div>
                                <div className='createNutritionalInfos'>
                                    <p className='createNutrients'>Proteinas</p>
                                    <input type="number" name="" value={proteins} className='createNutrientsNumbers' onChange={(e) => setProteins(Number(e.target.value))} />
                                </div>
                                <div className='createNutritionalInfos'>
                                    <p className='createNutrients'>Gordura</p>
                                    <input type="number" name="" value={fat} className='createNutrientsNumbers' onChange={(e) => setFat(Number(e.target.value))} />
                                </div>
                            </div>
                        </div>
                        <div className='sendRecipe'>
                            <button type='submit'>Criar receita</button>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}