import React, { Fragment } from 'react'
import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import { commonStyles as common } from '../../../style/common.style'
import Star from '../SharedCocktailComponents/Star'
import IngredientList from './IngredientList'
import GarnishList from './GarnishList'
import Taste from './Taste'
import CocktailGraphic from './CocktailGraphic'
import ParallaxScrollView from 'react-native-parallax-scrollview'
import {
  COLORS,
  TASTE_COLORS,
  INGREDIENT_COLORS
} from '../../../style/theme.style'

class CocktailDisplayScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  generateCocktailHeader = cocktail => (
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

      <Taste tastes={cocktail.tastes} />

      <CocktailGraphic
        height={215}
        width={180}
        ingredients={cocktail.cocktail_ingredients}
      />
    </View>
  )

  generateCocktailInstructions = cocktail => (
    <View style={{ ...common.paddedSection, backgroundColor: COLORS.BLACK }}>
      <Image
        style={{
          marginTop: 12,
          marginBottom: 8,
          width: 50,
          height: 50,
          tintColor: COLORS.WHITE
        }}
        source={require('./cocktail-assets/shaker.png')}
      />
      <Text
        style={{
          ...common.regularText,
          fontSize: 22,
          textAlign: 'center'
        }}
      >
        {cocktail.instructions}
      </Text>
    </View>
  )
  generateCocktailIngredients = cocktail => (
    <View style={{ backgroundColor: COLORS.BLACK }}>
      <View
        style={{
          ...common.paddedSection,
          backgroundColor: COLORS.ACCENT1,
          paddingTop: 50,
          paddingBottom: 50,
          borderTopLeftRadius: 40
        }}
      >
        <Text style={{ ...common.regularText, fontSize: 20 }}>
          Make with...
        </Text>
        <IngredientList cocktail_ingredients={cocktail.cocktail_ingredients} />

        {cocktail.garnishes.length !== 0 && (
          <View style={{ marginTop: 40 }}>
            <Text
              style={{
                ...common.regularText,
                fontSize: 20,
                paddingBottom: 30
              }}
            >
              ...then add...
            </Text>

            <GarnishList garnishes={cocktail.garnishes} />
          </View>
        )}
      </View>
    </View>
  )

  generateCocktailInfo = cocktail => (
    <View
      style={{
        backgroundColor: COLORS.ACCENT1
      }}
    >
      <View
        style={{
          ...common.paddedSection,
          backgroundColor: COLORS.ACCENT2,
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
            tintColor: COLORS.WHITE
          }}
          source={require('./cocktail-assets/info.png')}
        />
        <Text style={{ ...common.regularText, textAlign: 'center' }}>
          {cocktail.info}
        </Text>
      </View>
    </View>
  )

  generateCocktailCreated = cocktail => (
    <View
      style={{
        backgroundColor: COLORS.ACCENT2
      }}
    >
      <View
        style={{
          ...common.paddedSection,
          backgroundColor: COLORS.ACCENT3,
          paddingTop: 50,
          paddingBottom: 50,
          borderTopLeftRadius: 40
        }}
      >
        <Text style={common.regularText}>Created By</Text>
        <Text style={{ ...common.handwrittenText, textAlign: 'center' }}>
          {cocktail.user.username}
        </Text>
      </View>
    </View>
  )

  generateCocktailContent = cocktail => {
    SCREEN_HEIGHT = Dimensions.get('window').height
    return (
      <Fragment>
        <ParallaxScrollView
          backgroundSource={{ uri: cocktail.base.img_url }}
          windowHeight={SCREEN_HEIGHT - 150}
          navBarTitle={cocktail.name}
          navBarTitleColor={COLORS.WHITE}
          navBarColor='black'
          headerView={this.generateCocktailHeader(cocktail)}
          leftIcon={{
            name: 'close',
            color: 'white',
            size: 30,
            type: 'antdesign'
          }}
          leftIconOnPress={() => this.props.navigation.navigate('Cocktails')}
          rightIcon={{
            name: 'star-o',
            color: COLORS.YELLOW,
            size: 30,
            type: 'font-awesome'
          }}
          rightIconOnPress={() =>
            this.setState({ index: (this.state.index + 1) % 3 })
          }
        >
          <ScrollView style={{ flex: 1 }}>
            {this.generateCocktailInstructions(cocktail)}
            {this.generateCocktailIngredients(cocktail)}
            {this.generateCocktailInfo(cocktail)}
            {this.generateCocktailCreated(cocktail)}
          </ScrollView>
        </ParallaxScrollView>
      </Fragment>
    )
  }

  generatePlaceholder = () => <Text> Loading... </Text>

  render() {
    const cocktail = this.props.navigation.getParam('cocktail', {})

    return cocktail
      ? this.generateCocktailContent(cocktail)
      : this.generatePlaceholder()
  }
}

export default CocktailDisplayScreen
