import { TASTE_COLORS } from '../../styles/common'

// helper method to enable robust string compaisons
const normalizeString = string => string.toLowerCase().trim()

// returns correct colors depending on taste, default colors to handle exceptions
const getTasteColors = tasteName => {
  let match = TASTE_COLORS.find(
    taste => normalizeString(taste.name) === normalizeString(tasteName)
  )
  if (match !== undefined) return match
  return { name: tasteName, backgroundColor: '#666666', color: '#efefef' }
}

export { normalizeString, getTasteColors }
