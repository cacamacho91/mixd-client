import React from 'react'
import { Icon } from 'react-native-elements'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import CocktailScreen from './src/components/Cocktails/CocktailScreen'
import CocktailCreatorScreen from './src/components/CocktailCreator/CocktailCreatorScreen'
import ProfileScreen from './src/components/Profile/ProfileScreen'

const TabNavigator = createBottomTabNavigator(
  {
    Cocktails: CocktailScreen,
    'Cocktail Creator': CocktailCreatorScreen,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        if (routeName === 'Cocktails') {
          return <Icon name='drink' type='entypo' size={25} color={tintColor} />
        } else if (routeName === 'Cocktail Creator') {
          return (
            <Icon
              name='ios-add-circle'
              type='ionicon'
              size={25}
              color={tintColor}
            />
          )
        } else if (routeName === 'Profile') {
          return (
            <Icon
              name='user-circle'
              type='font-awesome'
              size={25}
              color={tintColor}
            />
          )
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
