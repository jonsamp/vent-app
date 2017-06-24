import React from 'react'
import { shallow } from 'enzyme'
import Button from '../index'

describe('Button', () => {
  const props = {
    onClick: jest.fn()
  }

  const wrapper = shallow(
    <Button {...props} />
  )

  it('should call a callback function when clicked', () => {
    const button = wrapper.find('button')
    button.simulate('click')
    const expected = props.onClick.mock.calls.length
    expect(expected).toBe(1)
  })
})
