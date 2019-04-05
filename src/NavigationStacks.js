import { createStackNavigator } from 'react-navigation'
//Shared Screens
import CocktailDisplayScreen from './components/SharedCocktailComponents/CocktailDisplayScreen'
//Profile Screens
import ProfileScreen from './components/Profile/ProfileScreen'
import MyFavouritesScreen from './components/Profile/MyFavouritesScreen'
import MyCreationsScreen from './components/Profile/MyCreationsScreen'
//Cocktail Screens
import CocktailsScreen from './components/Cocktails/CocktailsScreen'
import FilterScreen from './components/Cocktails/FilterScreen'
//Cocktail Creator Screens
import CocktailCreatorScreen from './components/CocktailCreator/CocktailCreatorScreen'
import CreatorHelpScreen from './components/CocktailCreator/CreatorHelpScreen'

import { COLORS } from '../styles/common'

const globalDefaultNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.DARK
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const CocktailStack = createStackNavigator(
  {
    Cocktails: CocktailsScreen,
    CocktailDisplay: CocktailDisplayScreen,
    Filter: FilterScreen
  },
  {
    initialRouteName: 'Cocktails',
    defaultNavigationOptions: globalDefaultNavigationOptions
  }
)

const CocktailCreatorStack = createStackNavigator(
  {
    CocktailCreator: CocktailCreatorScreen,
    Help: CreatorHelpScreen
  },
  {
    initialRouteName: 'CocktailCreator',
    defaultNavigationOptions: globalDefaultNavigationOptions
  }
)

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    MyCreations: MyCreationsScreen,
    MyFavourites: MyFavouritesScreen
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: globalDefaultNavigationOptions
  }
)

export { ProfileStack, CocktailStack, CocktailCreatorStack }
