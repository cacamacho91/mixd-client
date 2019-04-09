import React from 'react'
import { Icon } from 'react-native-elements'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

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
      items={items}
      hideSearch={hideSearch}
      searchPlaceholderText={`Search ${name}`}
      readOnlyHeadings={true}
      showDropDowns={false}
      expandDropDowns={true}
      selectedText='selected'
      showCancelButton
      uniqueKey='id'
      subKey='children'
      selectText={`Add / Remove ${name}`}
      showChips={false}
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedItems}
    />
  )
}

export default ItemSelector
