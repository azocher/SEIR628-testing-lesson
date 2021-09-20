import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

describe('Counter component', () => {
    let component
    beforeEach(() => {
        component = shallow(<Counter />)
    })

    // store counter as a state variable and set intial value to 0
    it('should hold current value counter in state variable with initialized val of 0', () => {
        expect(component.state('counter')).toEqual(0)
    })

    // check for display of number in component render
    it('should display current value of counter in rendered component', () => {
        expect(component.text()).toEqual("Current Count: 0")
    })

    // if button clicked increase number val by one
    it('renders button that if clicked increases value of counter by one', () => {
        component.find('.plus').simulate('click')
        expect(component.state('counter')).toEqual(1)
    })


})