export default defineCachedEventHandler(() => {
  return Math.random()
}, { maxAge: 7 * 24 * 60 * 60 * 1000 }) // 7 days
