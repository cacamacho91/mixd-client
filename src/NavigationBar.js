import React from 'react'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation'
import {
  ProfileStack,
  CocktailStack,
  CocktailCreatorStack
} from './NavigationStacks'
import { COLORS } from '../style/theme.style'

const NavigationBar = createBottomTabNavigator(
  {
    Cocktails: CocktailStack,
    'Cocktail Creator': CocktailCreatorStack,
    Profile: ProfileStack
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
      labelStyle: {
        fontSize: 14,
        fontFamily: 'cocomat-light'
      },
      style: { backgroundColor: '#FFFFFA' },
      activeTintColor: '#8EB1C7',
      inactiveTintColor: 'gray'
    }
  }
)
export default NavigationBar
