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
import { Link } from 'react-router'

interface Ref {
    sectionCategoriesRef: React.RefObject<null>
}

export const Categories = ({ sectionCategoriesRef }: Ref) => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div ref={sectionCategoriesRef} className="divCategories">
            <h2>Que tipo de receita você procura?</h2>
            <div className='categories'>
                <Link to="/fit" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGReceitasFit} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Receitas fit</p>
                    </div>
                </Link>

                <Link to="/meat" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGCarnes} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Carnes</p>
                    </div>
                </Link>

                <Link to="/fish" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGPeixes} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Peixes e frutos do mar</p>
                    </div>
                </Link>

                <Link to="/birds" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGAves} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Aves</p>
                    </div>
                </Link>

                <Link to="/pasta" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGMassas} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Massas</p>
                    </div>
                </Link>

                <Link to="/desserts" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGSobremesas} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Sobremesas</p>
                    </div>
                </Link>

                <Link to="/cake" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGBolos} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Bolos e tortas</p>
                    </div>
                </Link>

                <Link to="/drinks" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGBebidas} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Bebidas</p>
                    </div>
                </Link>

                <Link to="/sideDishes" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGAcompanhamentos} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Acompanhamentos</p>
                    </div>
                </Link>

                <Link to="/soups" onClick={() => scrollToTop()}>
                    <div className='recipeCategory'>
                        <img src={IMGSopas} alt="" className='recipeCategoryIMG' />
                        <p className='recipeCategoryP'>Sopas</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}