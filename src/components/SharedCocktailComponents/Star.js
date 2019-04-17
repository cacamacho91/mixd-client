import React, { Fragment } from 'react'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { COLORS } from '../../../style/theme.style'
import { commonStyles as common } from '../../../style/common.style'

const Star = props => {
  const { active, showCount, count, mini } = props

  return (
    <Fragment>
      <Icon
        type='font-awesome'
        name={active ? 'star' : 'star-o'}
        color={COLORS.ACCENT3}
        size={mini ? 10 : 30}
      />
      {showCount && (
        <Text
          style={{ ...common.regularText, color: COLORS.ACCENT3, fontSize: 12 }}
        >
          {count}
        </Text>
      )}
    </Fragment>
  )
}

export default Star
