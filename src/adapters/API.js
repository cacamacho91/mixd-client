const VERSION = 'v1'
const BASE_URL = `https://mixd-server.herokuapp.com/api/${VERSION}`
//const BASE_URL = `http://localhost:3000/api/${VERSION}`

const COCKTAIL_URL = BASE_URL + '/cocktails'
const INGREDIENT_URL = BASE_URL + '/ingredients'
const GARNISH_URL = BASE_URL + '/garnishes'
const TASTE_URL = BASE_URL + '/tastes'

const getAllCocktails = () => fetch(COCKTAIL_URL).then(resp => resp.json())
const getAllIngredients = () => fetch(INGREDIENT_URL).then(resp => resp.json())
const getAllGarnishes = () => fetch(GARNISH_URL).then(resp => resp.json())
const getAllTastes = () => fetch(TASTE_URL).then(resp => resp.json())
const getAllCocktailAttributes = () =>
  fetch(`${INGREDIENT_URL}/all-attributes`).then(resp => resp.json())

export default {
  getAllCocktails,
  getAllIngredients,
  getAllGarnishes,
  getAllTastes,
  getAllCocktailAttributes
}
