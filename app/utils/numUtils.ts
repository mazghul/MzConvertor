export const formatCurrency = (value: string, currency: string) => {
  const numericValue = parseFloat(value.replaceAll(',', ''))
  return numericValue.toLocaleString('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export const formatNumberCurrency = (value: number) => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
