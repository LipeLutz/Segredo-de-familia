import './Main.css'

import IMG from "./assets/piccini-cucina-divulgacao-tagliolini-al-ragu-classico.jpg"
import { Categories } from '../Categories/Categories.js'
import { useRef } from 'react'



export const Main = () => {

    const sectionCategoriesRef = useRef(null)

    const scrollToCategoriesRef = () =>{
        sectionCategoriesRef.current?.scrollIntoView({behavior: "smooth"})
    }

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

                    <button className='exploreRecipes' onClick={scrollToCategoriesRef}>Explorar receitas</button>
                </div>

                <div className='divMainWelcomeIMG'>
                    <img src={IMG} alt="" className='welcomeIMG' />
                </div>
            </div>
            
            <Categories sectionCategoriesRef={sectionCategoriesRef}/>
            {/* <LatestRecipes /> */}
        </div>
    )
}