import { Date } from '../../src'

jest.mock('moment', () => () => ({ format: () => '2012-11-11' }))

describe('Model Numeric', () => {
  const date = new Date('2012-11-11', {
    displayName: 'test',
  })

  it('should create instance', () => {
    expect(JSON.stringify(date)).toMatchSnapshot()
  })

  it('should have format function', () => {
    expect(date.format()).toBe('2012-11-11')
  })
})
