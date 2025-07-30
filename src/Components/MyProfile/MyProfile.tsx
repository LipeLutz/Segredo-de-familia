import './MyProfile.css'

export const MyProfile = () =>{
    return(
        <div className="divMyProfile">
            <div className='myProfile'>
                <div className='divUserInfo'>
                    <p>Nome do usuário:</p><span></span>
                    <p>Email cadastrado:</p><span></span>
                    <p>Número de receitas adicionadas:</p>
                </div>
                <div className='divUserRecipes'>
                    <p>Receitas adicionadas</p>
                </div>
                
            </div>

        </div>
    )
}