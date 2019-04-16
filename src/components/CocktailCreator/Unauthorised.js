import React from 'react'
import { Image, View, Text } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'
import { COLORS } from '../../../style/theme.style'

const Unauthorised = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BLACK,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: 'https://i.ibb.co/g95rTq5/red-carpet-1.png' }}
      />
      <Text style={{ ...common.heading, textAlign: 'center', fontSize: 40 }}>
        Members Only.
      </Text>
      <Text
        style={{
          ...common.regularText,
          fontSize: 18,
          textAlign: 'center',
          color: COLORS.GREY
        }}
      >
        Join MIXD to create and share cocktails
      </Text>
      <View />
    </View>
  )
}

export default Unauthorised
