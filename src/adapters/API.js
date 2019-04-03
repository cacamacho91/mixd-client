const VERSION = 'v1'
const BASE_URL = `https://mixd-server.herokuapp.com/api/${VERSION}`
const COCKTAIL_URL = BASE_URL + '/cocktails'

const getAllCocktails = () => fetch(COCKTAIL_URL).then(resp => resp.json())

export default {
  getAllCocktails
}
