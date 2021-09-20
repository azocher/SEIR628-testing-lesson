import React from 'react'
import { shallow } from 'enzyme'
import HelloWorld from './HelloWorld'

describe('Hello world component', () => {
    it('should render as expected', () => {
        // checks that actual component renders okay
        // check and see if we can pass in prop with keyword name
        const component = shallow(<HelloWorld name={'Anna'} />)
        // check and see if name prop is being rendered in component
        expect(component.contains('Anna')).toBe(true)
    })
})