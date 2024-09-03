function sortObject(originalObject: { [key: string]: number }) {
  const arrayOfObjects = Object.entries(originalObject).map(([title, number]) => ({
    title,
    number
  }))

  arrayOfObjects.sort((a, b) => b.number - a.number)

  return arrayOfObjects
}

export default sortObject
