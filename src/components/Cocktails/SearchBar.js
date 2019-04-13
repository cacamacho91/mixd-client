import { Animated } from 'react-native'
import React from 'react'
import { View, Text } from 'react-native'
import { Icon, SearchBar as SearchBarElement } from 'react-native-elements'

class SearchBar extends React.Component {
  state = {
    visible: props.visible
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.setState({ visible: true })
    }
    Animated.timing(this._visibility, {
      toValue: nextProps.visible ? 1 : 0,
      duration: 300
    }).start(() => {
      this.setState({ visible: nextProps.visible })
    })
  }

  componentWillMount() {
    this._visibility = new Animated.Value(this.props.visible ? 1 : 0)
  }
  render() {
    const { visible, style } = this.props

    const containerStyle = {
      opacity: this._visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      }),
      transform: [
        {
          scale: this._visibility.interpolate({
            inputRange: [0, 1],
            outputRange: [1.1, 1]
          })
        }
      ]
    }
    const combinedStyle = [containerStyle, style]
    return (
      <Animated.View
        style={this.state.visible ? combinedStyle : containerStyle}
      >
        {this.state.visible ? (
          <SearchBarElement
            placeholder='Search...'
            onChangeText={searchTerm => this.setState({ searchTerm })}
            value={searchTerm}
          />
        ) : null}
      </Animated.View>
    )
  }
}
export default SearchBar
