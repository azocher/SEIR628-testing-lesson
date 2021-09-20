import React from 'react'
import { mount } from 'enzyme'

import ToDos from './ToDos'
import ToDo from './ToDo'

describe('ToDos Component', () => {
  const listItems = [
    { task: 'create lesson', done: false },
    { task: 'clean apartment', done: false }
  ]

  let component;
  beforeEach(() => {
    // this time, mount instead of shallow because we will have subcomponents within our ToDos component
    component = mount(<ToDos tasks={listItems} />)
  })

  it('Should contain two todo subcomponents', () => {
      expect(component.find(ToDo).length).toBe(2)
  })

  it('Should render the todo list tasks', () => {
    component.find(ToDo).forEach((todo, idx) => {
      expect(todo.find('.task-name').text()).toBe(listItems[idx].task)
    })
  })

  it(`Should have have a state attribute for the new todo that should update 
      when the user types in an input`, () => {
    expect(component.state('newTodo')).toBe('')
    component.find('input').simulate('change', {target: {value: 'hello'}})
    expect(component.state('newTodo')).toBe('hello')
  })



})