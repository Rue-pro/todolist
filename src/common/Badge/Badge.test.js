import React from 'react'
import Badge from './Badge'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { BadgeTypeEnum } from './Badge'

describe('Badge', () => {
  it('should render correctly with type=approved', () => {
    const output = shallow(<Badge type={BadgeTypeEnum.approved}>approved badge</Badge>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with type=inProgress', () => {
    const output = shallow(<Badge type={BadgeTypeEnum.inProgress}>inProgress badge</Badge>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with type=inReview', () => {
    const output = shallow(<Badge type={BadgeTypeEnum.inReview}>inReview badge</Badge>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with type=waiting', () => {
    const output = shallow(<Badge type={BadgeTypeEnum.waiting}>waiting badge</Badge>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with wrong props type', () => {
    const output = shallow(<Badge type="approved">wrong type badge</Badge>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with no props children', () => {
    const output = shallow(<Badge type={BadgeTypeEnum.approved}></Badge>)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('should render correctly with no props', () => {
    const output = shallow(<Badge />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
