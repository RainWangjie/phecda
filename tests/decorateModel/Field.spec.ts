import { Field } from '../../src'

describe('Model Field', () => {
  it('should create instance', () => {
    const field = new Field({
      displayName: 'test',
    })

    expect(JSON.stringify(field)).toMatchSnapshot()
  })
})
