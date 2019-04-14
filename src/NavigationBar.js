import React from 'react'
import { Icon } from 'react-native-elements'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {
  ProfileStack,
  CocktailStack,
  CocktailCreatorStack
} from './NavigationStacks'
import { COLORS } from '../style/theme.style'

const NavigationBar = createMaterialBottomTabNavigator(
  {
    Cocktails: {
      screen: CocktailStack,
      navigationOptions: {
        title: 'Cocktails',
        tabBarLabel: 'Cocktails',
        tabBarColor: '#231F20',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon size={25} name='drink' type='entypo' color={tintColor} />
        )
      }
    },
    'Cocktail Creator': {
      screen: CocktailCreatorStack,
      navigationOptions: {
        title: 'Cocktial Creator',
        tabBarLabel: 'Cocktial Creator',
        tabBarColor: '#8797AF',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='ios-add-circle'
            type='ionicon'
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        title: 'Profile',
        tabBarLabel: 'Profile',
        tabBarColor: '#493657',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='user-circle'
            type='font-awesome'
            size={23}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    shifting: true,
    initialRouteName: 'Cocktails',
    activeColor: '#FFFFFA',
    inactiveColor: 'rgba(255,255,255, 0.5)'
  }
)

export default NavigationBar
