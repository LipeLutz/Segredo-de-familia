export interface CreateRecipeInterface{
    id: string | undefined
    file: string
    recipeName: string
    recipeDescription: string
    prepTime: string
    cookingTime: string
    ingredientsList: string[]
    instructionsList: string[]
    recipeCategory: string[]
    calories: number
    carbs: number
    proteins: number
    fat: number
    date: number
}