import IMGReceitasFit from './Assets/receitas-fit.jpg'
import IMGCarnes from './Assets/carnes.jpg'
import IMGPeixes from './Assets/peixes.jpg'
import IMGAves from './Assets/aves.jpg'
import IMGMassas from './Assets/massas.jpg'
import IMGSobremesas from './Assets/sobremesas.jpg'
import IMGBolos from './Assets/torta.jpg'
import IMGBebidas from './Assets/drinks.jpg'
import IMGAcompanhamentos from './Assets/acompanhamentos.jpg'
import IMGSopas from './Assets/sopas.jpg'

import './Categories.css'

export const Categories = () =>{
    return(
        <div className="divCategories">
            <h2>Que tipo de receita você procura?</h2>
            <div className='categories'>
                <div className='recipeCategory'>
                    <img src={IMGReceitasFit} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Receitas fit</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGCarnes} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Carnes</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGPeixes} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Peixes e frutos do mar</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGAves} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Aves</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGMassas} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Massas</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGSobremesas} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Sobremesas</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGBolos} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Bolos e tortas</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGBebidas} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Bebidas</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGAcompanhamentos} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Acompanhamentos</p>
                </div>

                <div className='recipeCategory'>
                    <img src={IMGSopas} alt="" className='recipeCategoryIMG'/>
                    <p className='recipeCategoryP'>Sopas</p>
                </div>
            </div>
        </div>
    )
}