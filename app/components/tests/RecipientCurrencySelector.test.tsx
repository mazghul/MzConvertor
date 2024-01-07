import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import RecipientCurrencySelector from '../RecipientCurrencySelector'
import { CurrencyData } from '../../types/currency'
import { currencyData } from '../../../api/src/utils/mockData'
import { PaperProvider } from 'react-native-paper'

const mockCurrencyData: CurrencyData[] = currencyData

describe('<RecipientCurrencySelector />', () => {
  jest.useFakeTimers()
  it('renders correctly', () => {
    const { getByText } = render(
      <PaperProvider>
        <RecipientCurrencySelector
          currencyData={mockCurrencyData}
          amount="100"
          setAmount={jest.fn()}
          onCurrencySelect={jest.fn()}
        />
      </PaperProvider>,
    )
    expect(getByText('Recipient gets')).toBeTruthy()
  })

  it('opens modal on press', () => {
    const { getByText } = render(
      <PaperProvider>
        <RecipientCurrencySelector
          currencyData={mockCurrencyData}
          amount="100"
          setAmount={jest.fn()}
          onCurrencySelect={jest.fn()}
        />
      </PaperProvider>,
    )

    fireEvent.press(getByText('Recipient gets'))
    expect(
      getByText(
        `${mockCurrencyData[0].country} (${mockCurrencyData[0].currency})`,
      ),
    ).toBeTruthy()
  })

  it('displays error component when no currency data is provided', () => {
    const { getByText } = render(
      <RecipientCurrencySelector
        currencyData={[]}
        amount="100"
        setAmount={jest.fn()}
        onCurrencySelect={jest.fn()}
      />,
    )

    expect(getByText('We are down now. Please check back later.')).toBeTruthy() // Assuming ErrorComponent shows this text
  })

  it('selects currency and closes modal', async () => {
    const handleCurrencySelect = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <PaperProvider>
        <RecipientCurrencySelector
          currencyData={mockCurrencyData}
          amount="100"
          setAmount={jest.fn()}
          onCurrencySelect={handleCurrencySelect}
        />
      </PaperProvider>,
    )
    fireEvent.press(getByText('Recipient gets'))
    await waitFor(() => {
      const searchInput = getByPlaceholderText('Search...')
      fireEvent.changeText(searchInput, mockCurrencyData[5].country)
      fireEvent.press(
        getByText(
          `${mockCurrencyData[5].country} (${mockCurrencyData[5].currency})`,
        ),
      )
    })

    expect(handleCurrencySelect).toHaveBeenCalledWith(mockCurrencyData[5])
    expect(getByText(mockCurrencyData[5].currency)).toBeTruthy()
  })

  it('updates amount when input changes', async () => {
    const setAmount = jest.fn()
    const { getByTestId } = render(
      <PaperProvider>
        <RecipientCurrencySelector
          currencyData={mockCurrencyData}
          amount="100"
          setAmount={setAmount}
          onCurrencySelect={jest.fn()}
        />
      </PaperProvider>,
    )

    const amountInput = getByTestId('recipient-text-input')
    fireEvent.changeText(amountInput, '200')

    expect(setAmount).toHaveBeenCalledWith('200')
  })
})
