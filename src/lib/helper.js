import { LOADING_PHRASES } from '../../style/common.style'
import { TASTE_COLORS } from '../../style/theme.style'

// helper method to enable robust string compaisons
const normalizeString = string => string.toLowerCase().trim()

const getLoadingPhrase = () =>
  LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)]

export { normalizeString, getLoadingPhrase }
