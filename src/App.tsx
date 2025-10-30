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
import { Meat } from './Components/RecipeByCategory/Meat/Meat'
import { Fish } from './Components/RecipeByCategory/Fish/Fish'
import { Birds } from './Components/RecipeByCategory/Birds/Birds'
import { Pasta } from './Components/RecipeByCategory/Pasta/Pasta'
import { Desserts } from './Components/RecipeByCategory/Desserts/Desserts'
import { Cake } from './Components/RecipeByCategory/Cake/Cake'
import { Drinks } from './Components/RecipeByCategory/Drinks/Drinks'
import { SideDishes } from './Components/RecipeByCategory/Side-Dishes/SideDishes'
import { Soups } from './Components/RecipeByCategory/Soups/Soups'

function App() {

  const sectionRef = useRef(null)

  const scrollToRef = () =>{
        sectionRef.current?.scrollIntoView({behavior: "smooth"})
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
          <Route path='/fit' element={<Fit sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/meat' element={<Meat sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/fish' element={<Fish sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/birds' element={<Birds sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/pasta' element={<Pasta sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/desserts' element={<Desserts sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/cake' element={<Cake sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/drinks' element={<Drinks sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/sideDishes' element={<SideDishes sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
          <Route path='/soups' element={<Soups sectionRef={sectionRef} scrollToRef={scrollToRef}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
