import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, TextInput } from 'react-native'
import { Text, Button, Card } from 'react-native-paper'
import axios from 'axios'

export default function HomeScreen() {
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('')
  const [amount, setAmount] = useState('1')
  const [result, setResult] = useState(null)

  const API_KEY = ''

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `http://api.currencylayer.com/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&access_key=${API_KEY}`,
      )

      setResult(response.data.result)
    } catch (error) {
      console.error('Error converting currency:', error)
    }
  }

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      convertCurrency()
    }
  }, [fromCurrency, toCurrency, amount])

  return (
    <View style={styles.container}>
      <Text variant={'headlineMedium'}>Currency Converter</Text>

      <Card style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="From Currency"
          value={fromCurrency}
          onChangeText={(text) => setFromCurrency(text.toUpperCase())}
        />

        <TextInput
          style={styles.input}
          placeholder="To Currency"
          value={toCurrency}
          onChangeText={(text) => setToCurrency(text.toUpperCase())}
        />

        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount.toString()}
          onChangeText={(text) => setAmount(text)}
        />

        {result !== null && (
          <Text variant={'titleSmall'}>Result: {result}</Text>
        )}

        <Button mode="contained" onPress={convertCurrency}>
          Convert
        </Button>
      </Card>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 16,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})
