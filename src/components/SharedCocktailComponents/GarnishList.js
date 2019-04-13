import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'

const GarnishList = props => {
  const { garnishes } = props
  if (!garnishes || garnishes.length === 0) return

  return (
    <View style={styles.garnishRowContainer}>
      {garnishes.map((garnish, idx) => (
        <View key={idx} style={styles.garnishContainer}>
          <Image
            style={{ ...styles.garnishImage }}
            source={{ uri: garnish.img_url }}
          />
          <Text style={{ ...common.subText, textAlign: 'center' }}>
            {garnish.name}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  garnishRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  garnishContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 100
  },
  garnishImage: {
    width: 30,
    height: 30
  }
})

export default GarnishList
