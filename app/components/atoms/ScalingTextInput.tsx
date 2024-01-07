import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { White } from '../../theme/colors'

interface ScalingTextInputProps extends React.ComponentProps<typeof TextInput> {
  baseFontSize?: number
}

const ScalingTextInput: React.FC<ScalingTextInputProps> = ({
  baseFontSize = 20,
  onChangeText,
  value = '',
  ...props
}) => {
  const [fontSize, setFontSize] = useState(baseFontSize)
  const [internalValue, setInternalValue] = useState(value)

  useEffect(() => {
    setInternalValue(value)
    const newFontSize = getFontSizeForLength(value.length, baseFontSize)
    setFontSize(newFontSize)
  }, [value])

  const getFontSizeForLength = (length: number, baseSize: number) => {
    if (length > 24) return baseSize * 0.5
    if (length > 17) return baseSize * 0.7
    return baseSize
  }

  const handleTextChange = useCallback((text: string) => {
    const newFontSize = getFontSizeForLength(text.length, baseFontSize)
    setFontSize(newFontSize)

    const formattedText = formatCurrency(text)
    setInternalValue(formattedText)

    if (onChangeText) onChangeText(formattedText)
  }, [])

  const formatCurrency = (text: string) => {
    const numericText = text.replace(/[^0-9.]/g, '').replace(/^0+/, '')
    const integerPart = numericText.split('.')[0]
    const decimalPart = numericText.split('.')[1] //  TODO show decimal part as a seperate color like in design7

    let formattedValue = integerPart
    if (decimalPart !== undefined) {
      formattedValue +=
        '.' + (decimalPart.length > 1 ? decimalPart.slice(0, 2) : decimalPart)
    }
    return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <TextInput
      mode={'outlined'}
      {...props}
      style={[styles.input, { fontSize }]}
      value={internalValue}
      outlineStyle={styles.inputOutline}
      onChangeText={handleTextChange}
      keyboardType="numeric"
    />
  )
}

const styles = StyleSheet.create({
  inputOutline: {
    borderRadius: 10,
  },
  input: {
    flex: 1,
    marginLeft: -10,
    zIndex: -1,
    backgroundColor: White,
    textAlign: 'right',
    fontWeight: 'bold',
    padding: 10,
  },
})

export default React.memo(ScalingTextInput)
