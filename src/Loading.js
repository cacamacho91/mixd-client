import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { BarIndicator as LoadingAnimation } from 'react-native-indicators'
import { COLORS } from '../style/theme.style'
import { getLoadingPhrase } from './lib/helper'
import { commonStyles as common } from '../style/common.style'

const Loading = props => (
  <View style={styles.loadingContainer}>
    <View style={styles.loadingContainer}>
      <Text
        style={{
          ...common.regularText
        }}
      >
        {getLoadingPhrase()}
      </Text>
      <LoadingAnimation color={props.color} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK
  }
})

export default Loading
