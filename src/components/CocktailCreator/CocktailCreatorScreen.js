import React, { Fragment } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { commonStyles as common } from '../../../style/common.style'
import { COLORS } from '../../../style/theme.style'
import CocktailGraphic from '../SharedCocktailComponents/CocktailGraphic'
import API from '../../adapters/API'
import ItemSelector from './ItemSelector'
import IngredientList from '../SharedCocktailComponents/IngredientList'
import GarnishList from '../SharedCocktailComponents/GarnishList'
import Taste from '../SharedCocktailComponents/Taste'
import { Dropdown } from 'react-native-material-dropdown'
import Loading from '../../Loading'

let data = [
  {
    value: 'Banana'
  },
  {
    value: 'Mango'
  },
  {
    value: 'Pear'
  }
]

class CocktailCreatorScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create A Cocktail',
    headerRight: (
      <Icon
        name='help-outline'
        color='white'
        type='material-icons'
        iconStyle={{ marginRight: 30 }}
        onPress={() => navigation.navigate('Help')}
      />
    )
  })

  state = {
    lib: {
      garnishLib: [],
      baseLib: [],
      ingredientLib: [],
      tasteLib: [],
      glassLib: [],
      fullyLoaded: false
    },
    garnishIds: [],
    ingredientIds: [],
    tasteIds: [],
    cocktailIngredients: [] //used to store the parts
  }

  getAndSetGarnishes = () =>
    API.getAllGarnishes().then(allGarns => {
      const libGarnishes = [{ name: 'Garnishes', id: 0, children: allGarns }]
      this.setState({
        lib: {
          ...this.state.lib,
          garnishLib: libGarnishes
        }
      })
    })

  getAndSetIngredients = () =>
    API.getAllIngredients().then(allIngs => {
      const libIngs = [{ name: 'Ingredients', id: 0, children: allIngs }]
      this.setState({
        lib: {
          ...this.state.lib,
          ingredientLib: libIngs
        }
      })
    })

  getAndSetTastes = () =>
    API.getAllTastes().then(allTastes => {
      const libTastes = [{ name: 'Tastes', id: 0, children: allTastes }]
      this.setState({
        lib: {
          ...this.state.lib,
          tasteLib: libTastes
        }
      })
    })

  getAndSetGlasses = () =>
    API.getAllGlasses().then(allGlasses =>
      this.setState({
        lib: {
          ...this.state.lib,
          glassLib: allGlasses
        }
      })
    )

  getAndSetBaseLiquors = () =>
    API.getAllBaseLiquors().then(allBases =>
      this.setState({
        lib: {
          ...this.state.lib,
          baseLib: allBases
        }
      })
    )

  componentDidMount = async () => {
    await Promise.all([
      this.getAndSetGarnishes(),
      this.getAndSetIngredients(),
      this.getAndSetTastes(),
      this.getAndSetGlasses(),
      this.getAndSetBaseLiquors()
    ])
    this.setState({ fullyLoaded: true })
  }

  garnishSelectorChangeHandler = garnishIds => {
    if (garnishIds.length > 9) {
      return alert(
        'A maximum of 9 garnishes can be used on a single cocktial (less is more)'
      )
    }
    this.setState({ garnishIds })
  }
  ingredientSelectorChangeHandler = ingredientIds => {
    if (ingredientIds.length > 10) {
      return alert(
        'We love ambition in an aspiring bar person but the limit is 10 ingredeints per cocktail!'
      )
    }
    let ingObjs = []

    ingredientIds.map(ingId =>
      ingObjs.push({
        parts: 1,
        ingredient: this.state.lib.ingredientLib[0].children.find(
          ing => ing.id === ingId
        )
      })
    )

    this.setState({ ingredientIds, cocktailIngredients: ingObjs })
  }
  tasteSelectorChangeHandler = tasteIds => {
    if (tasteIds.length > 4) {
      return alert('A maximum of 4 tastes can be used on a single cocktail')
    }
    this.setState({ tasteIds })
  }
  getGarnishObjects = () =>
    this.state.lib.garnishLib[0].children.filter(garnish =>
      this.state.garnishIds.includes(garnish.id)
    )
  getTasteObjects = () =>
    this.state.lib.tasteLib[0].children.filter(taste =>
      this.state.tasteIds.includes(taste.id)
    )
  getIngredientObjects = () =>
    this.state.lib.ingredientLib[0].children.filter(ing =>
      this.state.ingredientIds.includes(ing.id)
    )

  handlePartIncrement = ingId => {
    const newIngredients = this.state.cocktailIngredients.map(ingObj => {
      if (ingObj.ingredient.id !== ingId) return ingObj
      if (ingObj.parts === 20) {
        alert('20 parts is the maximum allowed')
        return ingObj
      }
      return { ...ingObj, parts: ingObj.parts + 1 }
    })
    this.setState({ cocktailIngredients: newIngredients })
  }
  handlePartDecrement = ingId => {
    const newIngredients = this.state.cocktailIngredients.map(ingObj => {
      if (ingObj.ingredient.id !== ingId) return ingObj
      if (ingObj.parts === 1) {
        alert(
          '1 part is the minimum allowed, to remove unselect from ther list'
        )
        return ingObj
      }
      return { ...ingObj, parts: ingObj.parts - 1 }
    })
    this.setState({ cocktailIngredients: newIngredients })
  }

  buildCocktailCreator = () => (
    <ScrollView style={{ backgroundColor: COLORS.BLACK }}>
      <View
        style={{
          ...common.paddedSection,
          paddingTop: 10,
          backgroundColor: COLORS.BLACK
        }}
      >
        <Text
          style={{
            ...common.heading,
            color: COLORS.WHITE,
            textAlign: 'center'
          }}
        >
          1 ~ Build
        </Text>

        <Text style={{ ...common.regularText, fontSize: 20 }}>
          1.1 - Select Ingredients
        </Text>
        <Text style={{ ...common.regularText, color: COLORS.GREY }}>
          Include all Alcahol & Mixers needed
        </Text>

        <ItemSelector
          name='Ingredients'
          items={this.state.lib.ingredientLib}
          onSelectedItemsChange={this.ingredientSelectorChangeHandler}
          selectedItems={this.state.ingredientIds}
        />

        <IngredientList
          handlePartIncrement={this.handlePartIncrement}
          handlePartDecrement={this.handlePartDecrement}
          editable
          cocktail_ingredients={this.state.cocktailIngredients}
        />

        {this.state.cocktailIngredients.length === 0 ? (
          <Text
            style={{
              ...common.regularText,
              textAlign: 'center',
              color: COLORS.ACCENT3
            }}
          >
            Pick some ingredients to get started (Tap the pencil under the 'Make
            With' section above).
          </Text>
        ) : (
          <Fragment>
            <Text
              style={{
                ...common.regularText,
                textAlign: 'center',
                color: COLORS.GREY
              }}
            >
              Check out your cocktail composition below... (created
              automatically based on ingredients /parts selected above)
            </Text>
            <CocktailGraphic
              height={150}
              width={150}
              ingredients={this.state.cocktailIngredients}
              glass='rock'
            />
          </Fragment>
        )}

        <Dropdown
          containerStyle={{ width: '80%' }}
          baseColor={COLORS.ACCENT3}
          itemColor={COLORS.WHITE}
          selectedItemColor={COLORS.ACCENT3}
          textColor={COLORS.WHITE}
          itemTextStyle={{ ...common.regularText }}
          pickerStyle={{ backgroundColor: COLORS.BLACK }}
          itemTextStyle={common.regularText}
          label='1.2 Pick Base Liquor'
          data={data}
        />

        <Text style={{ ...common.regularText, fontSize: 20 }}>
          Select your Garnishes
        </Text>
        <Text style={{ ...common.regularText, color: COLORS.GREY }}>
          (optional)
        </Text>

        <ItemSelector
          name='Garnish'
          items={this.state.lib.garnishLib}
          onSelectedItemsChange={this.garnishSelectorChangeHandler}
          selectedItems={this.state.garnishIds}
        />

        {this.state.garnishIds.length !== 0 && (
          <GarnishList garnishes={this.getGarnishObjects()} />
        )}

        <Text style={{ ...common.heading, textAlign: 'center' }}>
          3 ~ Describe your creation
        </Text>
        <Text
          style={{
            ...common.regularText,
            textAlign: 'center',
            color: COLORS.GREY
          }}
        >
          Pick the tastes, write the instructions and add any extra info on how
          your creation came to be, and of course... give it a name.
        </Text>

        <ItemSelector
          name='Tastes'
          items={this.state.lib.tasteLib}
          onSelectedItemsChange={this.tasteSelectorChangeHandler}
          selectedItems={this.state.tasteIds}
          hideSearch
        />

        <Text style={common.regularText}>Taste Profile: </Text>
        {this.state.tasteIds.length !== 0 && (
          <Taste tastes={this.getTasteObjects()} />
        )}

        <Text style={common.regularText}>Cocktail Name: </Text>
        <Input style={styles.input} />

        <Text style={common.regularText}>How to Make: </Text>
        <Input style={styles.input} />

        <Text style={common.regularText}>Best Served in: </Text>

        <Text style={common.regularText}>Origin Story / Extra Info: </Text>
        <Input style={styles.input} />
      </View>
    </ScrollView>
  )

  render() {
    const { fullyLoaded } = this.state
    return fullyLoaded ? this.buildCocktailCreator() : <Loading />
  }
}

const styles = StyleSheet.create({
  input: {
    ...common.regularText
  }
})
export default CocktailCreatorScreen
