import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { BarIndicator as LoadingAnimation } from 'react-native-indicators'
import { COLORS } from '../style/theme.style'
import { getLoadingPhrase } from './lib/helper'
import { commonStyles as common } from '../style/common.style'

const Loading = props => (
  <View style={styles.loadingContainer}>
    <LoadingAnimation color={COLORS.PRIMARY} />
    <Text style={{ ...common.subText, ...styles.loadingText }}>
      {getLoadingPhrase()}
    </Text>
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
