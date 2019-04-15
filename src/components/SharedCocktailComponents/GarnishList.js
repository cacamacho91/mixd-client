import React, { Fragment } from 'react'
import { Text, View, Image } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'

const GarnishList = props => {
  const { garnishes } = props

  return (
    garnishes.length !== 0 && (
      <Fragment>
        {garnishes.map((garnish, idx) => (
          <View
            key={idx}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ height: 20, width: 20, marginRight: 10 }}
              source={{ uri: garnish.img_url }}
            />
            <Text style={common.regularText}>{garnish.name}</Text>
          </View>
        ))}
      </Fragment>
    )
  )
}

export default GarnishList
