import React from 'react'
import { createAppContainer } from 'react-navigation'
import NavigationBar from './src/NavigationBar'
import { Font, AppLoading } from 'expo'
import { AsyncStorage } from 'react-native'
import API from './src/adapters/API'

if (__DEV__) {
  import('./config/reactotron.config').then(() =>
    console.log('Reactotron Configured Sucessfully')
  )
}

const AppContainer = createAppContainer(NavigationBar)

export default class App extends React.Component {
  state = {
    id: '',
    username: '',
    allCocktails: [],
    myStarredIds: [],
    appInitialLoaded: false
  }

  login = async user => {
    try {
      await AsyncStorage.setItem('token', user.token)
      const { id, username, myStarredIds } = user
      this.setState({ username, id, myStarredIds })
    } catch (e) {
      alert('error storing token error:' + e)
    }
  }

  addCocktailToAll = newCocktail =>
    this.setState({ allCocktails: [...this.state.allCocktails, newCocktail] })

  handleStarChange = cocktailId => {
    //it is already starred by the user
    if (this.state.myStarredIds.includes(cocktailId)) {
      this.setState({
        myStarredIds: this.state.myStarredIds.filter(id => id !== cocktailId)
      })
      this.setState({
        allCocktails: this.state.allCocktails.map(cocktail => {
          if (cocktail.id !== cocktailId) return cocktail
          return { ...cocktail, star_count: cocktail.star_count - 1 }
        })
      })
      //it has not yet been starred by user
    } else {
      this.setState({ myStarredIds: [...this.state.myStarredIds, cocktailId] })
      this.setState({
        allCocktails: this.state.allCocktails.map(cocktail => {
          if (cocktail.id !== cocktailId) return cocktail
          return { ...cocktail, star_count: cocktail.star_count + 1 }
        })
      })
    }
  }

  logout = () => {
    try {
      AsyncStorage.removeItem('token')
      this.setState({ username: '', id: '' })
    } catch (e) {
      alert('error logging out, error:' + e)
    }
  }
  //Load Inital state
  async componentDidMount() {
    //Get all the cocktials
    await API.getCocktails().then(allCocktails => {
      this.setState({
        allCocktails
      })
    })
    //Load custom fonts
    await Font.loadAsync({
      'cocomat-light-italic': require('./assets/fonts/Cocomat-Light-Italic.ttf'),
      'cocomat-ultralight': require('./assets/fonts/Cocomat-Ultralight.ttf'),
      'cocomat-light': require('./assets/fonts/Cocomat-Light.ttf'),
      luxia: require('./assets/fonts/Luxia-Display.ttf'),
      belinda: require('./assets/fonts/Belinda.ttf')
      //Previous Fonts Below
      //'existence-light': require('./assets/fonts/Existence-Light.ttf'),
      //voga: require('./assets/fonts/Voga-Medium.ttf'),
      //lora: require('./assets/fonts/Lora-Regular.ttf'),
      //oranienbaum: require('./assets/fonts/Oranienbaum.ttf'),
    })
    //Check if user is signed in, if so auto-login
    await API.validate().then(userData => {
      if (userData.error) {
        this.logout()
      } else {
        this.login(userData)
      }
    })
    this.setState({ appInitialLoaded: true })
  }

  render() {
    const { appInitialLoaded, allCocktails, myStarredIds } = this.state

    return appInitialLoaded ? (
      <AppContainer
        screenProps={{
          username: this.state.username,
          id: this.state.id,
          allCocktails,
          myStarredIds,
          login: this.login,
          logout: this.logout,
          handleStarChange: this.handleStarChange,
          addCocktailToAll: this.addCocktailToAll
        }}
      />
    ) : (
      <AppLoading />
    )
  }
}
