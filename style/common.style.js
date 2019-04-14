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
    fontFamily: 'luxia',
    color: '#FFFFFA',
    fontSize: 26
  },
  lightText: {
    fontFamily: 'cocomat-ultralight',
    fontSize: 14,
    color: '#F8FFF4'
  },
  regularText: {
    fontFamily: 'cocomat-light',
    fontSize: 14,
    color: '#F8FFF4'
  },
  italicText: {
    fontFamily: 'cocomat-light-italic',
    fontSize: 14,
    color: '#F8FFF4'
  },
  handwrittenText: {
    fontFamily: 'belinda',
    fontSize: 45,
    color: '#F8FFF4'
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
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
})

export { LOADING_PHRASES, commonStyles }
