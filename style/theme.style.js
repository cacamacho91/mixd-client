//Color Schemes
const COLORS = {
  BLACK: '#231F20',
  WHITE: '#FFFFFA',
  GREY: '#788585',
  YELLOW: '#F7DBA7',
  ACCENT1: '#96BCC5',
  ACCENT2: '#8E5572',
  ACCENT3: '#ED6A5A'
}

//Theme 3 - Blues
// ACCENT1: '#98C1D9',
// ACCENT2: '#3D5A80',
// ACCENT3: '#F05D5E'

//Theme 2 (with Shit Orange)
// ACCENT1: '#96BDC6', //DARK-SKY-BLUE
// ACCENT2: '#FCB97D', //MELLOW-APRICOT
// ACCENT3: '#8E5572' //SUGAR-PLUM-PURPLE

//Origninal Theme
// ACCENT1: '#8797AF', //GRAY-BLUE
// ACCENT2: '#FCB97D', //PEWTER-BLUE
// ACCENT3: '#8E5572' //FUZZY PINK

//Colors for tastes
const TASTE_COLORS = {
  Savory: '#F6E58D',
  Sweet: '#c27ba0',
  Sour: '#38761d',
  Bitter: '#f9cb9c',
  Aromatic: '#b6d7a8',
  Spicy: '#990000',
  Smoky: '#efefef',
  Strong: '#bf9000',
  Creamy: '#cad3c8',
  Fresh: '#6fa8dc',
  Dry: '#f2fbff',
  Fruity: '#ecf8ff'
}

const LIGHT_TEXT = '#FFFFFA'
const DARK_TEXT = '#F8FFF4'

const BASIC_ING_COLORS = {
  pale: { backgroundColor: 'rgba(228,243,252,0.85)', color: DARK_TEXT },
  yellow: { backgroundColor: 'rgba(255,247,1,0.85)', color: DARK_TEXT },
  peach: { backgroundColor: 'rgba(237,175,79,0.85)', color: DARK_TEXT },
  red: { backgroundColor: 'rgba(172,11,44,0.85)', color: LIGHT_TEXT },
  orange: {
    backgroundColor: 'rgba(237,72,9,0.85)',
    color: LIGHT_TEXT
  },
  brown: { backgroundColor: 'rgba(116,61,36,0.85)', color: LIGHT_TEXT },
  green: { backgroundColor: 'rgba(13,181,76,0.85)', color: LIGHT_TEXT }
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
