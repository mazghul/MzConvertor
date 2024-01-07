import React from 'react'
import { render } from '@testing-library/react-native'
import FullFeeDetails from '../FullFeeDetails'
import { currencyData } from '../../../api/src/utils/mockData'
import { defaultCurrencyData } from '../../const'
import { formatNumberCurrency } from '../../utils/numUtils'

describe('FullFeeDetails component', () => {
  it('should render fee details correctly', () => {
    const { getByText } = render(
      <FullFeeDetails amount="100,000" selectedCurrency={currencyData[0]} />,
    )

    expect(getByText('Amount:')).toBeTruthy()
    expect(getByText('Fees:')).toBeTruthy()
    expect(getByText('Sending Amount:')).toBeTruthy()
    expect(getByText('Exchange Rate:')).toBeTruthy()

    expect(getByText(`${defaultCurrencyData.currency} 100,000.00`)).toBeTruthy()
    expect(
      getByText(
        `${defaultCurrencyData.currency} ${currencyData[0].fees.toFixed(2)}`,
      ),
    ).toBeTruthy()
    expect(
      getByText(
        `${defaultCurrencyData.currency} ${formatNumberCurrency(100000 - currencyData[0].fees)}`,
      ),
    ).toBeTruthy()
    expect(
      getByText(`${currencyData[0].exchange_rate.toFixed(2)}`),
    ).toBeTruthy()
  })
})
