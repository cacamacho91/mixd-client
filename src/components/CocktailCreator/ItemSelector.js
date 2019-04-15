import React from 'react'
import { Icon } from 'react-native-elements'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import { COLORS } from '../../../style/theme.style'

const ItemSelector = props => {
  const {
    name,
    hideSearch,
    items,
    onSelectedItemsChange,
    selectedItems
  } = props

  return (
    <SectionedMultiSelect
      selectToggleIconComponent={
        <Icon name='edit' type='feather' size={20} color={COLORS.ACCENT3} />
      }
      items={items}
      searchPlaceholderText={`Search ${name}`}
      readOnlyHeadings={true}
      showDropDowns={false}
      expandDropDowns={true}
      selectedText='selected'
      showCancelButton
      uniqueKey='id'
      subKey='children'
      selectText={''}
      showChips={false}
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedItems}
    />
  )
}

export default ItemSelector
