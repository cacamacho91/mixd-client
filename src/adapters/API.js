const VERSION = 'v1'
//const BASE_URL = `https://mixd-server.herokuapp.com/api/${VERSION}`
const BASE_URL = `http://localhost:3000/api/${VERSION}`
import { AsyncStorage } from 'react-native'

const COCKTAIL_URL = BASE_URL + '/cocktails'
const INGREDIENT_URL = BASE_URL + '/ingredients'
const GARNISH_URL = BASE_URL + '/garnishes'
const TASTE_URL = BASE_URL + '/tastes'

//================ AUTHORISED API CALLS ================//
//Used to control access to authorised endpoint for signed up users only
const authorizedFetch = async (url, options = {}) => {
  const token = await AsyncStorage.getItem('token')
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
}

const getMyCreations = () =>
  authorizedFetch(BASE_URL + '/mycreations').then(resp => resp.json())

//================ OPEN API CALLS ================//
const getAllCocktails = () => fetch(COCKTAIL_URL).then(resp => resp.json())
const getAllIngredients = () => fetch(INGREDIENT_URL).then(resp => resp.json())
const getAllGarnishes = () => fetch(GARNISH_URL).then(resp => resp.json())
const getAllTastes = () => fetch(TASTE_URL).then(resp => resp.json())
const getAllCocktailAttributes = () =>
  fetch(`${INGREDIENT_URL}/all-attributes`).then(resp => resp.json())

//================ TOKEN MANAGEMENT ================//
const login = user => {
  return fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(resp => resp.json())
}
const signUp = userData => {
  return fetch(BASE_URL + '/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: userData })
  }).then(resp => resp.json())
}

export default {
  getAllCocktails,
  getAllIngredients,
  getAllGarnishes,
  getAllTastes,
  getAllCocktailAttributes,
  login,
  signUp,
  getMyCreations
}
