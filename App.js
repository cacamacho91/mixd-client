import React from 'react'
import { createAppContainer } from 'react-navigation'
import NavigationBar from './src/NavigationBar'

const AppContainer = createAppContainer(NavigationBar)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
