import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface FeeDetailRowProps {
  label: string
  value: string
  isLastRow?: boolean
}

const FeeDetailRow: React.FC<FeeDetailRowProps> = ({
  label,
  value,
  isLastRow = false,
}) => (
  <View style={[styles.feeDetailRow, isLastRow && styles.lastRow]}>
    <Text style={styles.feeLabel}>{label}</Text>
    <Text style={styles.feeValue}>{value}</Text>
  </View>
)

const styles = StyleSheet.create({
  feeDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    overflow: 'hidden',
    borderBottomColor: '#e1e4e8',
    backgroundColor: '#f6f8fa',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  feeLabel: {
    fontSize: 16,
    color: '#586069',
  },
  feeValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default FeeDetailRow
