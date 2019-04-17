import React, { Fragment } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Icon, Input, Button } from 'react-native-elements'
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
import Unauthorised from './Unauthorised'

const initialState = {
  ingredientIds: [],
  //Below state used to build end cocktail in API
  garnishIds: [],
  tasteIds: [],
  cocktailIngredients: [], //used to store the parts
  name: '',
  info: '',
  instructions: '',
  selectedGlassId: undefined,
  selectedBaseId: undefined
}

class CocktailCreatorScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create A Cocktail'
  })

  state = {
    ...initialState,
    lib: {
      garnishLib: [],
      baseLib: [],
      ingredientLib: [],
      tasteLib: [],
      glassLib: [],
      fullyLoaded: false
    }
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

  frontEndValidation = () => {
    const {
      name,
      instructions,
      info,
      selectedGlassId,
      selectedBaseId,
      tasteIds,
      cocktailIngredients
    } = this.state

    if (name.length < 3 || name.length > 50) {
      alert('Give your cocktail a name (between 3 and 50 characters)')
      return false
    }
    if (instructions.length < 5 || instructions.length > 500) {
      alert(
        'Give your cocktail instructions to make (between 5 and 500 characters)'
      )
      return false
    }
    if (info.length < 5 || info.length > 300) {
      alert(
        'Give your cocktail an origin story or some trivia (between 5 and 300 characters)'
      )
      return false
    }
    if (selectedGlassId === undefined) {
      alert('Select a glass to serve your cocktail in')
      return false
    }
    if (selectedBaseId === undefined) {
      alert('Select a catagory for your cocktail')
      return false
    }
    if (tasteIds.length === 0) {
      alert('Pick at least one taste to describe your cocktail')
      return false
    }
    if (cocktailIngredients.length === 0) {
      alert(
        'Pick at least one ingredient for your cocktail (ideally more than one!)'
      )
      return false
    }
    return true
  }

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

  transformCocktailIngredients = () =>
    this.state.cocktailIngredients.map(ci => ({
      parts: ci.parts,
      ingredient_id: ci.ingredient.id
    }))

  handleCocktailCreate = () => {
    const {
      name,
      instructions,
      info,
      selectedGlassId,
      selectedBaseId,
      garnishIds,
      tasteIds
    } = this.state

    if (this.frontEndValidation()) {
      const cocktail = {
        cocktail: {
          name,
          instructions,
          info,
          glass_id: selectedGlassId,
          base_id: selectedBaseId
        },
        garnish_ids: garnishIds,
        taste_ids: tasteIds,
        cocktail_ingredients: this.transformCocktailIngredients()
      }
      API.createCocktail(cocktail).then(newCocktail => {
        if (newCocktail.error) {
          alert(
            'somenthing went wrong, check your cocktail details and try again'
          )
        } else {
          this.props.screenProps.addCocktailToAll(newCocktail)
          this.setState({ ...this.state, ...initialState })
          alert('cocktail created')
        }
      })
    }
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
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: COLORS.BLACK
        }}
      >
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              ...common.heading,
              color: COLORS.WHITE,
              textAlign: 'center'
            }}
          >
            1 ~ Build
          </Text>
          <Text
            style={{
              ...common.regularText,
              textAlign: 'center',
              color: COLORS.GREY
            }}
          >
            Create your cocktail...
          </Text>
        </View>

        <Text style={{ ...common.regularText, fontSize: 20 }}>
          1.1 - Select Ingredients
        </Text>
        <Text style={{ ...common.regularText, color: COLORS.GREY }}>
          Include all Alcohol & Mixers needed
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
            Pick some ingredients to get started...
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

        <Text style={{ ...common.regularText, fontSize: 20 }}>
          1.2 - Select Cocktail Category
        </Text>
        <Text style={{ ...common.regularText, color: COLORS.GREY }}>
          Used to help people find your cocktail
        </Text>

        <Dropdown
          onChangeText={(value, index, data) => {
            this.setState({ selectedBaseId: this.state.lib.baseLib[index].id })
          }}
          containerStyle={{ width: '80%' }}
          baseColor={COLORS.ACCENT3}
          itemColor={COLORS.WHITE}
          selectedItemColor={COLORS.ACCENT3}
          textColor={COLORS.WHITE}
          itemTextStyle={{ ...common.regularText }}
          pickerStyle={{ backgroundColor: COLORS.BLACK }}
          itemTextStyle={common.regularText}
          label=''
          valueExtractor={({ name }) => name}
          data={this.state.lib.baseLib}
        />

        <Text style={{ ...common.regularText, fontSize: 20 }}>
          1.3 Select your Garnishes
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
        <View style={{ marginBottom: 10 }}>
          <Text style={{ ...common.heading, textAlign: 'center' }}>
            2 ~ Describe your creation
          </Text>
          <Text
            style={{
              ...common.regularText,
              textAlign: 'center',
              color: COLORS.GREY
            }}
          >
            Share your cocktails story...
          </Text>
        </View>

        <Text style={{ ...common.regularText, fontSize: 20 }}>
          2.1 - Define Taste Profile
        </Text>
        <Text
          style={{
            ...common.regularText,
            color: COLORS.GREY,
            textAlign: 'center'
          }}
        >
          Describe your cocktails taste. (used to help others find your
          cocktail)
        </Text>

        <ItemSelector
          name='Tastes'
          items={this.state.lib.tasteLib}
          onSelectedItemsChange={this.tasteSelectorChangeHandler}
          selectedItems={this.state.tasteIds}
          hideSearch
        />

        {this.state.tasteIds.length !== 0 && (
          <Taste tastes={this.getTasteObjects()} />
        )}

        <Text style={{ ...common.regularText, fontSize: 20 }}>
          2.2 - Finishing Touches
        </Text>

        <Text style={common.regularText}>Cocktail Name: </Text>
        <Input
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          inputStyle={{ ...common.regularText }}
        />

        <Text style={common.regularText}>How to Make: </Text>
        <Input
          onChangeText={instructions => this.setState({ instructions })}
          value={this.state.instructions}
          inputStyle={{ ...common.regularText }}
        />

        <Text style={common.regularText}>Pick a Glass to Serve In: </Text>
        <Dropdown
          onChangeText={(value, index, data) => {
            this.setState({
              selectedGlassId: this.state.lib.glassLib[index].id
            })
          }}
          valueExtractor={item => item.name}
          containerStyle={{ width: '80%' }}
          baseColor={COLORS.ACCENT3}
          itemColor={COLORS.WHITE}
          selectedItemColor={COLORS.ACCENT3}
          textColor={COLORS.WHITE}
          itemTextStyle={{ ...common.regularText }}
          pickerStyle={{ backgroundColor: COLORS.BLACK }}
          itemTextStyle={common.regularText}
          label=''
          data={this.state.lib.glassLib}
        />

        <Text style={common.regularText}>Origin Story / Extra Info: </Text>
        <Input
          onChangeText={info => this.setState({ info })}
          value={this.state.info}
          inputStyle={{ ...common.regularText }}
        />

        <Button
          buttonStyle={{
            width: '90%',
            marginTop: 15,
            backgroundColor: COLORS.ACCENT3,
            borderRadius: 10
          }}
          onPress={this.handleCocktailCreate}
          titleStyle={{ ...common.regularText }}
          title='Create Cocktail'
        />
      </View>
    </ScrollView>
  )

  render() {
    const { fullyLoaded } = this.state
    const username = this.props.screenProps.username

    if (username === '') return <Unauthorised />

    return fullyLoaded ? (
      this.buildCocktailCreator()
    ) : (
      <Loading color={COLORS.ACCENT3} />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    ...common.regularText
  }
})
export default CocktailCreatorScreen
