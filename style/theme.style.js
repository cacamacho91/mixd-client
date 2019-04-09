//Color Schemes
const COLORS = {
  PRIMARY: '#5FBFF9',
  SECONDARY: '#5863F8',
  BACKGROUND: '#EFE9F4',
  DARK: '#171D1C'
}

//Colors for tastes
const TASTE_COLORS = {
  Savory: { backgroundColor: '#c36606', color: '#ffffff' },
  Sweet: { backgroundColor: '#ead1dc', color: '#c27ba0' },
  Sour: { backgroundColor: '#d9ead3', color: '#38761d' },
  Bitter: { backgroundColor: '#f9cb9c', color: '#f9cb9c' },
  Aromatic: { backgroundColor: '#6aa84f', color: '#b6d7a8' },
  Spicy: { backgroundColor: '#ea9999', color: '#990000' },
  Smoky: { backgroundColor: '#666666', color: '#efefef' },
  Strong: { backgroundColor: '#ffe599', color: '#bf9000' },
  Creamy: { backgroundColor: '#d9d9d9', color: '#ffffff' },
  Fresh: { backgroundColor: '#cfe2f3', color: '#6fa8dc' },
  Dry: { backgroundColor: '#73797d', color: '#f2fbff' },
  Fruity: { backgroundColor: '#a64d79', color: '#ecf8ff' }
}

const LIGHT_TEXT = '#ffffff'
const DARK_TEXT = '#2d2f30'

const BASIC_ING_COLORS = {
  pale: { backgroundColor: '#E4F3FC', color: DARK_TEXT },
  yellow: { backgroundColor: '#FFF701', color: DARK_TEXT },
  peach: { backgroundColor: '#EDAF4F', color: DARK_TEXT },
  red: { backgroundColor: '#AC0B2C', color: LIGHT_TEXT },
  orange: { backgroundColor: '#ED4809', color: LIGHT_TEXT },
  brown: { backgroundColor: '#743D24', color: LIGHT_TEXT },
  green: { backgroundColor: '#0DB54C', color: LIGHT_TEXT }
}

//Highly templated for now but each ingredient can be customised if desired
const INGREDIENT_COLORS = {
  //====Pale Ingredients====//
  //LIQUORS
  Vodka: { ...BASIC_ING_COLORS.pale },
  Gin: { ...BASIC_ING_COLORS.pale },
  Cachaca: { ...BASIC_ING_COLORS.pale },
  'White Rum': { ...BASIC_ING_COLORS.pale },
  'Tequila (silver)': { ...BASIC_ING_COLORS.pale },
  'Triple Sec': { ...BASIC_ING_COLORS.pale },
  Tequila: { ...BASIC_ING_COLORS.pale },
  'Dry Vermouth': { ...BASIC_ING_COLORS.pale },
  'Dry White Wine': { ...BASIC_ING_COLORS.pale },
  Kirsch: { ...BASIC_ING_COLORS.pale },
  'Creme de Cacao (white)': { ...BASIC_ING_COLORS.pale },
  'Lillet Blanc': { ...BASIC_ING_COLORS.pale },
  Maraschino: { ...BASIC_ING_COLORS.pale },
  'Old Tom Gin': { ...BASIC_ING_COLORS.pale },

  //MIXERS
  Cream: { ...BASIC_ING_COLORS.pale },
  'Gomme Syrup': { ...BASIC_ING_COLORS.pale },
  'Egg White': { ...BASIC_ING_COLORS.pale },
  'Coconut Milk': { ...BASIC_ING_COLORS.pale },
  Soda: { ...BASIC_ING_COLORS.pale },
  Water: { ...BASIC_ING_COLORS.pale },

  //====Yellow Ingredients====//
  //LIQUORS
  Galliano: { ...BASIC_ING_COLORS.yellow },
  'Citron Vodka': { ...BASIC_ING_COLORS.yellow },

  //MIXERS
  'Lemon Juice': { ...BASIC_ING_COLORS.yellow },
  'Egg Yolk': { ...BASIC_ING_COLORS.yellow },

  //====Peach Ingredients====//
  //LIQUORS
  'Lillet Blonde': { ...BASIC_ING_COLORS.peach },
  Prosecco: { ...BASIC_ING_COLORS.peach },
  Champagne: { ...BASIC_ING_COLORS.peach },
  'Gold Rum': { ...BASIC_ING_COLORS.peach },
  'Peach Schnapps': { ...BASIC_ING_COLORS.peach },

  //MIXERS
  'Peach Purée': { ...BASIC_ING_COLORS.peach },
  'Grapefruit Juice': { ...BASIC_ING_COLORS.peach },
  'Pineapple Juice': { ...BASIC_ING_COLORS.peach },
  'Sugar Syrup': { ...BASIC_ING_COLORS.peach },
  'Simple Syrup': { ...BASIC_ING_COLORS.peach },
  'Orgeat Syrup': { ...BASIC_ING_COLORS.peach },
  'Peach Bitters': { ...BASIC_ING_COLORS.peach },
  'Ginger Beer': { ...BASIC_ING_COLORS.peach },

  //====Red Ingredients====//
  //LIQUORS
  'Rasperry Liqueur': { ...BASIC_ING_COLORS.red },
  'Red Port': { ...BASIC_ING_COLORS.red },
  Campari: { ...BASIC_ING_COLORS.red },
  'Red Vermouth': { ...BASIC_ING_COLORS.red },
  'Blackberry Liqueur': { ...BASIC_ING_COLORS.red },
  'Cherry Liqueur': { ...BASIC_ING_COLORS.red },

  //MIXERS
  'Cranberry Juice': { ...BASIC_ING_COLORS.red },
  'Tomato Juice': { ...BASIC_ING_COLORS.red },
  'Rasperry Syrup': { ...BASIC_ING_COLORS.red },
  Grenadine: { ...BASIC_ING_COLORS.red },

  //====Orange Ingredients====//
  //LIQUORS
  Aperol: { ...BASIC_ING_COLORS.orange },
  'Orange curaćo': { ...BASIC_ING_COLORS.orange },
  Brandy: { ...BASIC_ING_COLORS.orange },
  'Apricot Brandy': { ...BASIC_ING_COLORS.orange },
  'Ginger Ale': { ...BASIC_ING_COLORS.orange },
  Cointreau: { ...BASIC_ING_COLORS.orange },

  //MIXERS
  'Orange Juice': { ...BASIC_ING_COLORS.orange },
  'Orange Bitters': { ...BASIC_ING_COLORS.orange },
  'Angostura Bitters': { ...BASIC_ING_COLORS.orange },

  //====Brown Ingredients====//
  //LIQUORS
  Cognac: { ...BASIC_ING_COLORS.brown },
  'Creme de Cassis': { ...BASIC_ING_COLORS.brown },
  'Rye Whisky': { ...BASIC_ING_COLORS.brown },
  Bénédictine: { ...BASIC_ING_COLORS.brown },
  'Dark Rum': { ...BASIC_ING_COLORS.brown },
  Bourbon: { ...BASIC_ING_COLORS.brown },
  'Irish Whiskey': { ...BASIC_ING_COLORS.brown },
  'Coffee Liqueur': { ...BASIC_ING_COLORS.brown },
  Calvados: { ...BASIC_ING_COLORS.brown },
  Drambuie: { ...BASIC_ING_COLORS.brown },
  DiSaronno: { ...BASIC_ING_COLORS.brown },
  Kahlúa: { ...BASIC_ING_COLORS.brown },
  "Bailey's": { ...BASIC_ING_COLORS.brown },
  'Grand Mariner': { ...BASIC_ING_COLORS.brown },
  'Creme de Cacao': { ...BASIC_ING_COLORS.brown },
  Scotch: { ...BASIC_ING_COLORS.brown },

  //MIXERS
  Cola: { ...BASIC_ING_COLORS.brown },
  Coffee: { ...BASIC_ING_COLORS.brown },

  //====Green Ingredients====//
  //LIQUORS
  Pisco: { ...BASIC_ING_COLORS.green },
  'Creme de Menthe': { ...BASIC_ING_COLORS.green },
  Absinthe: { ...BASIC_ING_COLORS.green },

  //MIXERS
  'Lime Juice': { ...BASIC_ING_COLORS.green },
  'Olive Juice': { ...BASIC_ING_COLORS.green }
}

export { COLORS, TASTE_COLORS, INGREDIENT_COLORS }
