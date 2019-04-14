import React from 'react'
import ProfilePage from './ProfilePage'
import API from '../../adapters/API'
import LoginSignUp from './LoginSignUp'

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    login: true //Show login or Signup Form
  }

  handleLogin = user => {
    API.login(user).then(data => {
      if (data.error) {
        alert('somthing went wrong, error: ' + data.error)
      } else {
        this.props.screenProps.login(data)
        alert(`Welcome ${user.username}`)
      }
    })
  }

  handleLogout = () => this.props.screenProps.logout()

  handleSignup = user => {
    API.signUp(user).then(data => {
      if (data.error) {
        alert('somthing went wrong, error: ' + e)
      } else {
        alert('welcome to MIXD')
        this.props.screenProps.login(data)
      }
    })
  }

  getMyStarredCocktails = () => {
    const { allCocktails, myStarredIds } = this.props.screenProps
    return allCocktails.filter(cocktail => myStarredIds.includes(cocktail.id))
  }
  getMyCreations = () => {
    const { allCocktails, myCreationIds } = this.props.screenProps
    return allCocktails.filter(cocktail => myCreationIds.includes(cocktail.id))
  }

  render() {
    const username = this.props.screenProps.username // Check if user logged in already
    const { login } = this.state

    return username === '' ? (
      login ? (
        <LoginSignUp
          loginView
          navigate={() => this.setState({ login: false })}
          handleSubmit={user => this.handleLogin(user)}
        />
      ) : (
        <LoginSignUp
          navigate={() => this.setState({ login: true })}
          handleSubmit={user => this.handleSignup(user)}
        />
      )
    ) : (
      <ProfilePage
        myStarredCocktails={this.getMyStarredCocktails()}
        myCreations={this.getMyCreations()}
        logout={this.handleLogout}
      />
    )
  }
}

export default ProfileScreen
