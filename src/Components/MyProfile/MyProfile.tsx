import { Link } from 'react-router'
import './MyProfile.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebaseConfig' 

export const MyProfile = () => {

    console.log(auth.currentUser)

    const openModalLogout = () =>{
        const modal = document.querySelector('.dialogLogout')

        modal!.showModal()
    }

    const signOutUser = async () =>{
        try{
           await signOut(auth) 
        } catch(error){
            console.log(error)
        }
        
    }

    return (
        <>
            <dialog className='dialogLogout'>
                <p>Tem certeza que deseja sair da conta?</p>
                <div className='divBtnLogout'>
                    <Link to='/'>
                        <button className='btnLogout' onClick={() =>signOutUser()}>Sair</button>
                    </Link>
                    
                    <button className='btnCancelLogout'>Cancelar</button>
                </div>
            </dialog>
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
                    <button onClick={openModalLogout}>Sair</button>
                </div>

            </div>

        </>

    )
}