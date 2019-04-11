import React from 'react'
import { createAppContainer } from 'react-navigation'
import NavigationBar from './src/NavigationBar'
import { Font, AppLoading } from 'expo'
import { AsyncStorage } from 'react-native'

const AppContainer = createAppContainer(NavigationBar)

export default class App extends React.Component {
  state = {
    id: '',
    username: '',
    appLoaded: false
  }

  login = async user => {
    try {
      await AsyncStorage.setItem('token', user.token)
      const { id, username } = user
      this.setState({ username, id })
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

  //Load App Fonts
  async componentDidMount() {
    await Font.loadAsync({
      'monserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
      'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf')
    })
    this.setState({ appLoaded: true })
  }

  render() {
    const { appLoaded } = this.state
    return appLoaded ? (
      <AppContainer
        screenProps={{
          username: this.state.username,
          id: this.state.id,
          login: this.login,
          logout: this.logout
        }}
      />
    ) : (
      <AppLoading />
    )
  }
}
