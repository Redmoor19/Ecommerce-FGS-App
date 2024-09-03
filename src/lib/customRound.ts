function customRound(number: number) {
  const decimalPart = number % 1
  if (decimalPart < 0.5) {
    return Math.floor(number)
  }
  return Math.ceil(number)
}

export default customRound
