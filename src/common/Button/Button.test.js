import React from 'react'
import Button from './Button'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { ButtonTypeEnum } from './Button'

describe('Button', () => {
  it('should render correctly with type=primary and disabled=true', () => {
    const output = shallow(
      <Button type={ButtonTypeEnum.primary} disabled={true}>
        primary button
      </Button>
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with type=primary and no disabled', () => {
    const output = shallow(<Button type={ButtonTypeEnum.primary}>primary button</Button>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with wrong props type', () => {
    const output = shallow(<Button type="primary">wrong type button</Button>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with no props children', () => {
    const output = shallow(<Button type={ButtonTypeEnum.primary}></Button>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with no props', () => {
    const output = shallow(<Button />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
