import React from 'react'
import { View, Text } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'
import { TASTE_COLORS } from '../../../style/theme.style'

const Taste = props => {
  const { tastes } = props

  return (
    tastes &&
    tastes.length !== 0 && (
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {tastes.map((taste, idx) => (
          <View
            key={idx}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: 15
            }}
          >
            <Text
              style={{
                ...common.italicText,
                fontSize: 18,
                color: TASTE_COLORS[taste.name]
              }}
            >
              {idx < tastes.length - 2 && idx !== tastes.length - 1
                ? taste.name + ', '
                : taste.name}
            </Text>
            {idx === tastes.length - 2 && (
              <Text
                style={{
                  fontSize: 18,
                  ...common.italicText
                }}
              >
                {` and `}
              </Text>
            )}
          </View>
        ))}
      </View>
    )
  )
}

export default Taste
