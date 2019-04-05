import React from 'react'
import { View, Text, Button } from 'react-native'

class FilterScreen extends React.Component {
  static navigationOptions = { title: 'Filter' }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Filter Cocktails</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    )
  }
}

export default FilterScreen
