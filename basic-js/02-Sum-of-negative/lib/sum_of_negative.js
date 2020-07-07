sumOfNegative = (numbers) => {
  let result = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      result += number;
    }
  })
  return result // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
}
sumOfNegative([-1, 4, -2, 9, 18])
