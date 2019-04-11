import { StyleSheet } from 'react-native'
import { COLORS, TASTE_COLORS } from './theme.style'

const LOADING_PHRASES = [
  'Mixing Drinks...',
  'Slicing Limes...',
  'Crushing Ice...',
  'Washing Glasses...'
]

const commonStyles = StyleSheet.create({
  //==== SHARED FONTS ====//
  heading: {
    fontFamily: 'monserrat-regular',
    fontSize: 24
  },
  subText: {
    fontFamily: 'roboto-thin',
    fontSize: 12,
    color: 'gray'
  },
  regularText: {
    fontFamily: 'roboto-light',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    padding: 8
  },
  //==== COCKTAIL DISPLAY ====//
  cocktailContainer: {
    flex: 1,
    alignItems: 'center'
  },
  cocktailGrapahicContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cocktailInfoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%'
  },
  tasteRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
})

export { LOADING_PHRASES, commonStyles }
