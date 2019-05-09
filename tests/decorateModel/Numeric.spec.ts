import { Numeric } from '../../src'

describe('Model Numeric', () => {
  const numeric = new Numeric(1, {
    decimals: 2,
    isPercent: false,
    displayName: 'test',
  })

  it('should create instance', () => {
    expect(JSON.stringify(numeric)).toMatchSnapshot()
  })

  it('should have defaultFormatString', () => {
    expect(numeric['defaultFormatString']).toBe('0,0.00')
  })

  it('should have format function', () => {
    expect(numeric.format()).toBe('1.00')

    numeric.value = 10000

    expect(numeric.format()).toBe('10,000.00')
    expect(numeric.format('0.0')).toBe('10000.0')
  })

  it('should have suffix when isPercent is true', () => {
    const percent = new Numeric(1, {
      decimals: 2,
      isPercent: true,
      displayName: 'test',
    })

    expect(percent.format()).toBe('100.00%')
    expect(percent.presentation).toBe('100.00%')
  })

  it('needs to have the correct decimal place when isPercent is true', () => {
    const percent = new Numeric(0.017977528089887642, {
      decimals: 2,
      isPercent: true,
      displayName: 'test',
    })

    expect(percent.format()).toBe('1.80%')
    expect(percent.presentation).toBe('1.80%')
    expect(percent.fuzzyValue).toBe(0.018)
  })
})
