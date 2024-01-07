import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ConversionRateDisplay from '../ConversionRateDisplay'
import { currencyData } from '../../../api/src/utils/mockData'
import { defaultCurrencyData } from '../../const'

describe('ConversionRateDisplay component', () => {
  it('should toggle fees when the "Fees" button is pressed', () => {
    const { getByText } = render(
      <ConversionRateDisplay
        amount="1,000,000"
        selectedCurrency={currencyData[0]}
      />,
    )

    const feesButton = getByText('Fees')
    fireEvent.press(feesButton)

    expect(getByText('Amount:')).toBeTruthy()
  })

  it('should should correct exchange rate', () => {
    const { getByText } = render(
      <ConversionRateDisplay
        amount="1,000,000"
        selectedCurrency={currencyData[0]}
      />,
    )

    expect(getByText(`1 ${defaultCurrencyData.currency}`)).toBeTruthy()
    expect(
      getByText(
        `= ${currencyData[0].currency} ${currencyData[0].exchange_rate}`,
      ),
    ).toBeTruthy()
  })
})
