import React from 'react'
import { Text, View, Button } from 'react-native'

class CocktailCreatorScreen extends React.Component {
  static navigationOptions = { title: 'Create A Cocktail!' }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Im a Cocktails Creator Page</Text>

        <Button
          title='Guide'
          onPress={() => this.props.navigation.navigate('Help')}
        />
      </View>
    )
  }
}

export default CocktailCreatorScreen
