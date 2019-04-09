import { Text } from '../../src'

describe('Model Presentation', () => {
  const text = new Text('test', {
    displayName: 'test',
  })

  it('should create instance', () => {
    expect(JSON.stringify(text)).toMatchSnapshot()
  })

  it('should have valueDisplayName', () => {
    expect(text.valueDisplayName).toBe('test')

    text.valueMapper = {
      test: 'test',
    }

    expect(text.valueDisplayName).toBe('test')
  })
})
