import { hasDeps } from '../utils'

describe('hasDeps', () => {
  it('should return false if the array is empty', () => {
    expect(hasDeps([])).toBe(false)
  })

  it('should return true if the array has at least one element', () => {
    expect(hasDeps(['a'])).toBe(true)
  })
})
