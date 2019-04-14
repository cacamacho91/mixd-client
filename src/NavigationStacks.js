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
import { COLORS } from '../style/theme.style'
import { commonStyles as common } from '../style/common.style'

const globalDefaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#231F20'
  },
  headerTintColor: '#FFFFFA',
  headerTitleStyle: {
    fontFamily: 'luxia',
    fontSize: 25
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
    MyFavourites: MyFavouritesScreen,
    CocktailDisplay: CocktailDisplayScreen
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: globalDefaultNavigationOptions
  }
)

export { ProfileStack, CocktailStack, CocktailCreatorStack }
