import axiosClient from "../axiosClient";
import { Commit } from "vuex";

export const searchMeals = (
  { commit }: { commit: Commit },
  keyword: string
) => {
  axiosClient
    .get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit("setSearchMeals", data.meals);
    })
    .catch((error) => {
      console.error("Error en la búsqueda de comidas:", error);
    });
};

export function searchMealsByLetter(
  { commit }: { commit: Commit },
  letter: string
) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient(
  { commit }: { commit: Commit },
  ing: string
) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredients", data.meals);
  });
}
