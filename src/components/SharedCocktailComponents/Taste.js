import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Taste = props => {
  const { mini, color_background, color_font, name } = props

  generateTaste = () => {
    if (mini) {
      return (
        <View
          style={{
            ...styles.tasteMini,
            backgroundColor: color_background
          }}
        />
      )
    } else {
      return (
        <View
          style={{
            ...styles.tasteLarge,
            backgroundColor: color_background,
            color: color_font
          }}
        >
          <Text style={{ color: color_font, textAlign: 'center' }}>{name}</Text>
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
