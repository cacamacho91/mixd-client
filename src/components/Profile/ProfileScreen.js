import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Your Profile</Text>
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

export default ProfileScreen
