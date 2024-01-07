import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import { CurrencyData } from '../types/currency'
import MenuFlagIcon from './atoms/MenuFlagIcon'
import { FeeDetailsBorderColor, White } from '../theme/colors'

interface CurrencyModalProps {
  visible: boolean
  hideModal: () => void
  currencyData: CurrencyData[]
  onCurrencySelect: (_currency: CurrencyData) => void
}

export const CurrencyModal: React.FC<CurrencyModalProps> = ({
  visible,
  hideModal,
  currencyData,
  onCurrencySelect,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredCurrencies, setFilteredCurrencies] =
    useState<CurrencyData[]>(currencyData)

  const searchCurrency = (term: string) => {
    setSearchTerm(term)
    if (term === '') {
      setFilteredCurrencies(currencyData)
    } else {
      setFilteredCurrencies(
        currencyData.filter(
          (currency) =>
            currency.country.toLowerCase().includes(term.toLowerCase()) ||
            currency.currency.toLowerCase().includes(term.toLowerCase()),
        ),
      )
    }
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}
      >
        <TextInput
          style={styles.searchBar}
          placeholder="Search currency"
          value={searchTerm}
          onChangeText={searchCurrency}
        />
        <FlatList
          data={filteredCurrencies}
          keyExtractor={(item) => item.country}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onCurrencySelect(item)}>
              <View style={styles.listItem}>
                <MenuFlagIcon flagUrl={item.flag_url} />
                <Text
                  style={styles.listItemText}
                >{`${item.country} (${item.currency})`}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: 30,
    backgroundColor: White,
    height: '75%',
  },
  searchBar: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderColor: FeeDetailsBorderColor,
  },
  listItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: FeeDetailsBorderColor,
  },
  listItemText: {
    marginLeft: 15,
    fontSize: 18,
  },
})
