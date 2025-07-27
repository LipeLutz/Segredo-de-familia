import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { CreateRecipe } from './Components/CreateRecipe/CreateRecipe'
import { CreateAccount } from './Components/CreateAccount/CreateAccount'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/createRecipe' element={<CreateRecipe />} />
          <Route path='/createAccount' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
