import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { getTasteColors } from '../../lib/helper'
import { TASTE_COLORS } from '../../../style/theme.style'

const Taste = props => {
  const { name } = props
  const { color } = TASTE_COLORS[name]

  return (
    <View
      style={{
        ...styles.tasteLarge
      }}
    >
      <Text style={{ color, textAlign: 'center' }}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tasteLarge: {
    padding: 10,
    margin: 20,
    textAlign: 'center'
  }
})

export default Taste
