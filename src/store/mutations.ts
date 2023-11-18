import { IMeals } from "../interfaces/IMeals"

export function setSearchedMeals(state: any, meals: IMeals[]) {
    state.searchedMeals = meals || []
  }

  export function setMealsByLetter(state: any, meals: IMeals[]) {
    state.mealsByLetter = meals || []
  }
  export function setMealsByIngredients(state: any, meals: IMeals[]) {
    state.mealsByIngredient = meals || []
  }
  export function setIngredient(state: any, ingredient: any) {
    state.ingredient = ingredient
  }