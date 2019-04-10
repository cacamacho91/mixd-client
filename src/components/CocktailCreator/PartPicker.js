import React from 'react'
import { View, Text } from 'react-native'
import NumericInput from 'react-native-numeric-input'

const PartPicker = props => {
  const { ingredient, parts } = props.ingObj

  return (
    <View>
      <Text>{ingredient.name}, Parts: </Text>
      <NumericInput value={parts} onChange={value => console.log(value)} />
    </View>
  )
}

export default PartPicker
