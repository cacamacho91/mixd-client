import React, { Fragment } from 'react'
import { Modal, View, StyleSheet, Image } from 'react-native'
import { Text, Icon } from 'react-native-elements'

const CocktailDetail = props => {
  let cocktailContent = null
  const cocktail = props.selectedCocktail

  if (cocktail) {
    cocktailContent = (
      <Fragment>
        <View style={styles.cocktailHeaderContainer}>
          <Icon
            iconStyle={styles.iconStyle}
            name='md-close'
            color='red'
            type='ionicon'
          />
          <Text h3 style={styles.cocktailName}>
            {cocktail.name}
          </Text>
          <Image
            source={{
              uri: 'https://via.placeholder.com/200'
            }}
            style={styles.cocktailImage}
          />
        </View>
      </Fragment>
    )
  }

  return (
    <Modal
      onRequestClose={props.handleModalClose}
      visible={props.selectedCocktail !== undefined}
      animationType='slide'
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>{cocktailContent}</View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 30
  },
  cocktailHeaderContainer: {
    flex: 1
  },
  iconStyle: {
    width: 20
  },
  cocktailImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  cocktailName: {
    textAlign: 'center'
  }
})

export default CocktailDetail
