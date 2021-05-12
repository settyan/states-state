export const getRandomHexColor: () => string = () => {
  const hex = Math.floor(Math.random() * 16777215).toString(16)

  return `#${hex}`
}
