import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { CreateRecipe } from './Components/CreateRecipe/CreateRecipe'
import { CreateAccount } from './Components/CreateAccount/CreateAccount'
import { MyProfile } from './Components/MyProfile/MyProfile'
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute'
import { Login } from './Components/Login/Login'
import { RecipeDetails } from './Components/RecipeDetails/RecipeDetails'
import { Fit } from './Components/RecipeByCategory/Fit/Fit'
import { useRef } from 'react'

function App() {

  const sectionFitRef = useRef(null)

  const scrollToFitRef = () =>{
        sectionFitRef.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='recipeDetails/:id' element={<RecipeDetails />} />
          <Route path='/createRecipe' element={<CreateRecipe />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myProfile' element={<MyProfile />} />
          <Route path='/protectedRoute' element={<ProtectedRoute />} />
          <Route path='/fitRecipes' element={<Fit sectionFitRef={sectionFitRef} scrollToFitRef={scrollToFitRef}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
