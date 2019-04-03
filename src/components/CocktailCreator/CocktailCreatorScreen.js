import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class CocktailCreatorScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Create a Cocktail!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CocktailCreatorScreen
