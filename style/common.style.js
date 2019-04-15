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
    color: COLORS.WHITE,
    fontSize: 26
  },
  lightText: {
    fontFamily: 'cocomat-ultralight',
    fontSize: 14,
    color: COLORS.WHITE
  },
  regularText: {
    fontFamily: 'cocomat-light',
    fontSize: 14,
    color: COLORS.WHITE
  },
  italicText: {
    fontFamily: 'cocomat-light-italic',
    fontSize: 14,
    color: COLORS.WHITE
  },
  handwrittenText: {
    fontFamily: 'belinda',
    fontSize: 45,
    color: COLORS.WHITE
  },
  //==== DISPLAY ====//
  paddedSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 15,
    paddingRight: 15
  }
})

export { LOADING_PHRASES, commonStyles }
