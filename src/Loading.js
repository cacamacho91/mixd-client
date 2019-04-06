import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { BarIndicator as LoadingAnimation } from 'react-native-indicators'
import { COLORS } from '../styles/common'
import { getLoadingPhrase } from './lib/helper'

const Loading = props => (
  <View style={styles.loadingContainer}>
    <LoadingAnimation color={COLORS.PRIMARY} />
    <Text style={styles.loadingText}>{getLoadingPhrase()}</Text>
  </View>
)

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  loadingText: {
    marginTop: 25
  }
})

export default Loading
