export interface CreateRecipeInterface{
    file: string | ArrayBuffer | null
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
}