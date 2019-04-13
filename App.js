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
    myCreationIds: [],
    myStarredIds: [],
    appInitialLoaded: false
  }

  login = async user => {
    try {
      await AsyncStorage.setItem('token', user.token)
      const { id, username, myCreationIds, myStarredIds } = user
      this.setState({ username, id, myCreationIds, myStarredIds })
    } catch (e) {
      alert('error storing token error:' + e)
    }
  }

  logout = () => {
    try {
      AsyncStorage.removeItem('token')
      this.setState({ username: '', id: '' })
      alert('See you next time!')
    } catch (e) {
      alert('error logging out, error:' + e)
    }
  }
  //Load Inital state
  async componentDidMount() {
    await API.getCocktails().then(allCocktails => {
      this.setState({
        allCocktails
      })
    })
    await Font.loadAsync({
      'cocomat-light-italic': require('./assets/fonts/Cocomat-Light-Italic.ttf'),
      'cocomat-ultralight': require('./assets/fonts/Cocomat-Ultralight.ttf'),
      'cocomat-light': require('./assets/fonts/Cocomat-Light.ttf'),
      'existence-light': require('./assets/fonts/Existence-Light.ttf'),
      voga: require('./assets/fonts/Voga-Medium.ttf'),
      luxia: require('./assets/fonts/Luxia-Display.ttf'),
      lora: require('./assets/fonts/Lora-Regular.ttf'),
      oranienbaum: require('./assets/fonts/Oranienbaum.ttf'),
      belinda: require('./assets/fonts/Belinda.ttf')
    })
    this.setState({ appInitialLoaded: true })
  }

  render() {
    const {
      appInitialLoaded,
      allCocktails,
      myCreationIds,
      myStarredIds
    } = this.state

    return appInitialLoaded ? (
      <AppContainer
        screenProps={{
          username: this.state.username,
          id: this.state.id,
          allCocktails,
          myCreationIds,
          myStarredIds,
          login: this.login,
          logout: this.logout
        }}
      />
    ) : (
      <AppLoading />
    )
  }
}
