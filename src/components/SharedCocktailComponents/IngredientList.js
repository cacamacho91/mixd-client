import React, { Fragment } from 'react'
import { Text, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'
import { INGREDIENT_COLORS, COLORS } from '../../../style/theme.style'

const IngredientList = props => {
  const {
    cocktail_ingredients,
    handlePartIncrement,
    handlePartDecrement,
    editable
  } = props

  return (
    <Fragment>
      {cocktail_ingredients.map((ingObj, idx) => (
        <View
          key={idx}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10
          }}
        >
          <View
            style={{
              height: 12,
              width: 12,
              marginRight: 6,
              borderRadius: 10,
              backgroundColor:
                INGREDIENT_COLORS[ingObj.ingredient.name].backgroundColor
            }}
          />
          <Text style={common.regularText}>{`${ingObj.parts} ${
            ingObj.parts === 1 ? 'part ' : 'parts'
          } ${ingObj.ingredient.name}`}</Text>
          {editable && (
            <Fragment>
              <Icon
                color={COLORS.WHITE}
                name='minuscircle'
                type='antdesign'
                size={15}
                onPress={() => handlePartDecrement(ingObj.ingredient.id)}
              />
              <Icon
                color={COLORS.WHITE}
                name='pluscircle'
                type='antdesign'
                size={15}
                onPress={() => handlePartIncrement(ingObj.ingredient.id)}
              />
            </Fragment>
          )}
        </View>
      ))}
    </Fragment>
  )
}

export default IngredientList
