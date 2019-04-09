import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { getTasteColors } from '../../lib/helper'
import { TASTE_COLORS } from '../../../style/theme.style'

const Taste = props => {
  const { mini, name } = props
  const { backgroundColor, color } = TASTE_COLORS[name]

  generateTaste = () => {
    if (mini) {
      return (
        <View
          style={{
            ...styles.tasteMini,
            backgroundColor
          }}
        />
      )
    } else {
      return (
        <View
          style={{
            ...styles.tasteLarge,
            backgroundColor
          }}
        >
          <Text style={{ color, textAlign: 'center' }}>{name}</Text>
        </View>
      )
    }
  }

  return generateTaste()
}
const styles = StyleSheet.create({
  tasteMini: {
    borderRadius: 4,
    width: 30,
    height: 10,
    marginRight: 2
  },
  tasteLarge: {
    borderRadius: 4,
    width: 60,
    height: 20,
    marginRight: 2,
    textAlign: 'center'
  }
})

export default Taste
