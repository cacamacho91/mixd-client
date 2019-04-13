import React, { Fragment } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { commonStyles as common } from '../../../style/common.style'

import CocktailGraphic from './CocktailGraphic'
import ParallaxScrollView from 'react-native-parallax-scrollview'
import { TASTE_COLORS, INGREDIENT_COLORS } from '../../../style/theme.style'

class CocktailDisplayScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  generateCocktailContent = cocktail => {
    SCREEN_HEIGHT = Dimensions.get('window').height
    return (
      <Fragment>
        <View style={{ height: 30, backgroundColor: 'black' }} />
        <ParallaxScrollView
          backgroundSource={{
            uri: cocktail.base.img_url
          }}
          windowHeight={SCREEN_HEIGHT - 150}
          navBarTitle={cocktail.name}
          navBarTitleColor='white'
          navBarColor='black'
          headerView={
            <View
              style={{
                width: '100%',
                height: 400
              }}
            >
              <Text
                style={{
                  ...common.heading,
                  textAlign: 'center',
                  fontSize: 50
                }}
              >
                {cocktail.name}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {cocktail.tastes.map((taste, idx) => (
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
                      {idx < cocktail.tastes.length - 2 &&
                      idx !== cocktail.tastes.length - 1
                        ? taste.name + ', '
                        : taste.name}
                    </Text>
                    {idx === cocktail.tastes.length - 2 && (
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

              <CocktailGraphic
                height={215}
                ingredients={cocktail.cocktail_ingredients}
              />
            </View>
          }
          leftIcon={{
            name: 'close',
            color: 'white',
            size: 30,
            type: 'antdesign'
          }}
          leftIconOnPress={() => this.props.navigation.navigate('Cocktails')}
          rightIcon={{
            name: 'staro',
            color: '#F7DBA7',
            size: 30,
            type: 'antdesign'
          }}
          rightIconOnPress={() =>
            this.setState({ index: (this.state.index + 1) % 3 })
          }
        >
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: '#080708',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                paddingTop: 100,
                paddingBottom: 100
              }}
            >
              <Image
                style={{
                  marginTop: 12,
                  marginBottom: 8,
                  width: 50,
                  height: 50,
                  tintColor: '#FFFFFA'
                }}
                source={require('./cocktail-assets/shaker.png')}
              />
              <Text
                style={{
                  ...common.regularText,
                  fontSize: 22,
                  textAlign: 'center',
                  color: '#FFFFFA'
                }}
              >
                {cocktail.instructions}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#080708'
              }}
            >
              <View
                style={{
                  backgroundColor: '#8797AF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  paddingTop: 50,
                  paddingBottom: 50,
                  borderTopLeftRadius: 40
                }}
              >
                <View styles={{ marginBottom: 40 }}>
                  <Text
                    style={{
                      ...common.regularText,
                      fontSize: 32,
                      color: '#FFFFFA'
                    }}
                  >
                    Make with...
                  </Text>
                </View>
                {cocktail.cocktail_ingredients.map((ingObj, idx) => (
                  <View
                    key={idx}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: 10
                    }}
                  >
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        marginRight: 6,
                        borderRadius: 10,
                        backgroundColor:
                          INGREDIENT_COLORS[ingObj.ingredient.name]
                            .backgroundColor
                      }}
                    />
                    <Text
                      style={{ ...common.regularText, color: '#FFFFFA' }}
                    >{`${ingObj.parts} ${
                      ingObj.parts === 1 ? 'part ' : 'parts'
                    } ${ingObj.ingredient.name}`}</Text>
                  </View>
                ))}

                {cocktail.garnishes.length !== 0 && (
                  <View style={{ marginTop: 40 }}>
                    <Text
                      style={{
                        ...common.regularText,
                        fontSize: 20,
                        paddingBottom: 30,
                        color: '#FFFFFA'
                      }}
                    >
                      ...then add...
                    </Text>

                    {cocktail.garnishes.map((garnish, idx) => (
                      <View
                        key={idx}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <Image
                          style={{ height: 20, width: 20, marginRight: 10 }}
                          source={{ uri: garnish.img_url }}
                        />
                        <Text
                          style={{ ...common.regularText, color: '#FFFFFA' }}
                        >
                          {garnish.name}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#8797AF'
              }}
            >
              <View
                style={{
                  backgroundColor: '#8EB1C7',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  padding: 50,
                  borderTopRightRadius: 40
                }}
              >
                <Image
                  style={{
                    marginTop: 12,
                    marginBottom: 4,
                    width: 22,
                    height: 22,
                    tintColor: '#FFFFFA'
                  }}
                  source={require('./cocktail-assets/info.png')}
                />
                <Text style={{ ...common.regularText, textAlign: 'center' }}>
                  {cocktail.info}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#8EB1C7'
              }}
            >
              <View
                style={{
                  backgroundColor: '#493657',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  paddingTop: 50,
                  paddingBottom: 50,
                  borderTopLeftRadius: 40
                }}
              >
                <Text style={{ ...common.regularText }}>Created By</Text>
                <Text style={{ ...common.handwrittenText }}>
                  {cocktail.user.username}
                </Text>
              </View>
            </View>
          </ScrollView>
        </ParallaxScrollView>
      </Fragment>
    )
  }

  generatePlaceholder = () => <Text> Loading... </Text>

  render() {
    const { navigation } = this.props
    const cocktail = navigation.getParam('cocktail', {})

    return cocktail
      ? this.generateCocktailContent(cocktail)
      : this.generatePlaceholder()
  }
}

export default CocktailDisplayScreen
