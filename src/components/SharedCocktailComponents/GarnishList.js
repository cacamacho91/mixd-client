import React, { Fragment } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'

const GarnishList = props => {
  const { garnishes } = props
  if (garnishes.length === 0) {
    return <Text style={common.subText}>No Garnish</Text>
  }

  return (
    <Fragment>
      <Text style={common.regularText}> Garnish With...</Text>
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
    </Fragment>
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
