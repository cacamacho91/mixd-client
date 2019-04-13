import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'
import { INGREDIENT_COLORS } from '../../../style/theme.style'

const CocktailGraphic = props => {
  const { glass, ingredients, simple } = props
  const height = props.height - 5

  buildCocktail = () => {
    let totalParts = 0
    ingredients.map(ing => (totalParts += ing.parts)) //use a reducer on this later

    let yOffset = 0

    ingViews = []

    ingredients.forEach((ingObj, idx) => {
      const ingHeight = (height / totalParts) * ingObj.parts

      ingViews.push(
        <View
          key={idx}
          style={{
            backgroundColor: INGREDIENT_COLORS[ingObj.ingredient.name]
              ? INGREDIENT_COLORS[ingObj.ingredient.name].backgroundColor
              : 'gray',
            position: 'absolute',
            width: '100%',
            height: ingHeight,
            borderWidth: 0,
            borderColor: INGREDIENT_COLORS[ingObj.ingredient.name]
              ? INGREDIENT_COLORS[ingObj.ingredient.name].backgroundColor
              : 'gray',
            bottom: idx === 0 ? 0 : yOffset // do not offset first item
          }}
        >
          <View style={styles.ingredientTextContainer}>
            {!simple && (
              <Text
                style={{
                  ...common.regularText,
                  color: INGREDIENT_COLORS[ingObj.ingredient.name]
                    ? INGREDIENT_COLORS[ingObj.ingredient.name].color
                    : 'black'
                }}
              >
                {ingObj.ingredient.name}
              </Text>
            )}
          </View>
        </View>
      )

      yOffset += ingHeight
    })
    return ingViews
  }

  return (
    <View style={{ ...styles.graphicContainer, height: height + 50 }}>
      <View style={styles.ingredientsContainer}>
        <View style={{ ...styles.glass, height: height + 5, width: height }}>
          {ingredients &&
            ingredients.length !== 0 &&
            buildCocktail().map(ing => ing)}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  graphicContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%'
  },
  ingredientsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  ingredientTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  glass: {
    margin: 10,
    // borderColor: 'white',
    // borderBottomWidth: 2.5,
    // borderRightWidth: 2.5,
    // borderLeftWidth: 2.5,
    width: '80%'
  }
})

export default CocktailGraphic
