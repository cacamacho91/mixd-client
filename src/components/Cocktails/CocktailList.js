import React from 'react'
import { View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

const CocktailList = props => {
  return (
    <View>
      {props.cocktails.map(cocktail => {
        const tastes = cocktail.tastes.map(taste => taste.name).join()

        return (
          <ListItem
            onPress={() => props.handleCocktailSelect(cocktail)}
            key={cocktail.id}
            leftAvatar={{
              source: {
                uri: 'https://via.placeholder.com/50'
              }
            }}
            title={cocktail.name}
            subtitle={tastes}
            rightIcon={
              <Icon name='ios-arrow-forward' color='gray' type='ionicon' />
            }
          />
        )
      })}
    </View>
  )
}

export default CocktailList
