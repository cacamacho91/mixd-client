const VERSION = 'v1'
const PROD_BASE_URL = `https://mixd-server.herokuapp.com/api/${VERSION}`
const DEV_BASE_URL = `http://localhost:3000/api/${VERSION}`

const COCKTAIL_URL = DEV_BASE_URL + '/cocktails'

const getAllCocktails = () => fetch(COCKTAIL_URL).then(resp => resp.json())

export default {
  getAllCocktails
}
