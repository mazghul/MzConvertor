import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { CurrencyData } from '../../types/currency'
import { currencyData } from '../../../api/src/utils/mockData'
import { PaperProvider } from 'react-native-paper'
import { TransferComponent } from '../TransferComponent'
import { formatNumberCurrency } from '../../utils/numUtils'

const mockCurrencyData: CurrencyData[] = currencyData

describe('<TransferComponent />', () => {
  jest.useFakeTimers()
  it('renders correctly and select first currency as default', () => {
    const { getByText } = render(
      <PaperProvider>
        <TransferComponent currencies={mockCurrencyData} />
      </PaperProvider>,
    )
    expect(getByText('Recipient gets')).toBeTruthy()
    expect(getByText('You send exactly')).toBeTruthy()
    expect(getByText(`${currencyData[0].currency}`)).toBeTruthy()
    expect(getByText('Start transfer')).toBeTruthy()
  })

  it('Should update result when input changes', () => {
    const { getByTestId } = render(
      <PaperProvider>
        <TransferComponent currencies={mockCurrencyData} />
      </PaperProvider>,
    )
    const amountInput = getByTestId('sender-text-input')
    fireEvent.changeText(amountInput, '200')
    const receiverInput = getByTestId('recipient-text-input')
    const selectedCurrency = currencyData[0]
    const calculateRecipientGets = () => {
      // TODO optimize
      const total =
        (parseFloat('200'.replaceAll(',', '')) - selectedCurrency.fees) *
        selectedCurrency.exchange_rate
      return total > 0 ? formatNumberCurrency(total) : '0'
    }
    expect(receiverInput.props.value).toBe(calculateRecipientGets())
  })

  it('Should update sender input  when result changes', () => {
    const { getByTestId } = render(
      <PaperProvider>
        <TransferComponent currencies={mockCurrencyData} />
      </PaperProvider>,
    )
    const amountInput = getByTestId('recipient-text-input')
    fireEvent.changeText(amountInput, '4000')
    const receiverInput = getByTestId('sender-text-input')
    const selectedCurrency = currencyData[0] // TODO optimize
    const amountWithFees =
      parseFloat('4000'.replaceAll(',', '')) / selectedCurrency.exchange_rate +
      selectedCurrency.fees
    expect(receiverInput.props.value).toBe(formatNumberCurrency(amountWithFees))
  })
})
