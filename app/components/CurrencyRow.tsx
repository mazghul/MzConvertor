import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { White } from '../theme/colors'
import { Image } from 'expo-image'

interface CurrencyRowProps {
  flagUrl: string
  currencySymbol: string
}

export const CurrencyRow: React.FC<CurrencyRowProps> = ({
  flagUrl,
  currencySymbol,
}) => {
  return (
    <View style={styles.currencyRow}>
      <Image style={styles.flag} source={{ uri: flagUrl }} />
      <Text style={styles.currency}>{currencySymbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  currencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 8,
  },
  currency: {
    fontSize: 18,
    color: White,
  },
})
