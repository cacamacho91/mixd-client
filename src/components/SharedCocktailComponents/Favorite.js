import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

const Favorite = props => {
  const { outlineColor, active } = props

  return active ? (
    <Icon name='heart' size={23} color='red' type='font-awesome' />
  ) : (
    <Icon name='heart-o' size={20} color={outlineColor} type='font-awesome' />
  )
}

StyleSheet.create({
  iconStyle: {}
})

export default Favorite
