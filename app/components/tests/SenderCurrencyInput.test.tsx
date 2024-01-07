import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SenderCurrencyInput from '../SenderCurrencyInput'

const mockCurrencyData = {
  country: 'United Arab Emirates',
  currency: 'AED',
  exchange_rate: 3.67,
  currency_symbol: 'د.إ',
  flag_url: 'https://flagcdn.com/h120/ae.png',
  fees: 0.1,
}

describe('SenderCurrencyInput', () => {
  jest.useFakeTimers()
  const setAmountMock = jest.fn()

  it('renders correctly with initial props', () => {
    const { getByText, getByTestId } = render(
      <SenderCurrencyInput
        currencyData={mockCurrencyData}
        amount="100"
        setAmount={setAmountMock}
      />,
    )

    expect(getByText('You send exactly')).toBeTruthy()
    expect(getByTestId('sender-text-input').props.value).toBe('100')
  })

  it('calls setAmount with the correct value when input is changed', () => {
    const { getByTestId } = render(
      <SenderCurrencyInput
        currencyData={mockCurrencyData}
        amount="100"
        setAmount={setAmountMock}
      />,
    )

    fireEvent.changeText(getByTestId('sender-text-input'), '200')
    expect(setAmountMock).toHaveBeenCalledWith('200')
  })
})
