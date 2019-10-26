import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../../components/item';

describe('<Item />', () => {
  it('can render initially in li with span, button', () => {
    let app = shallow(<Item item={({id: 0, text: 'Test', complete: false})} delete={()=>{}} toggleComplete={()=>{}} />);
    expect(app.find('li span').exists()).toBe(true);
    expect(app.find('li button').exists()).toBe(true);
  });

  it('can change completion status by click on span', () => {
    let toggled = false;
    let toggleComplete = () => {
      toggled = true;
    };
    let app = shallow(<Item item={({id: 0, text: 'Test', complete: false})} delete={()=>{}} toggleComplete={toggleComplete} />);
    let span = app.find('li span');
    span.simulate('click', {preventDefault: () =>{}});
    expect(toggled).toBeTruthy();
  });

  it('can change "delete" item by click button', () => {
    let deleted = false;
    let removeTodo = () => {
      deleted = true;
    };
    let app = shallow(<Item item={({id: 0, text: 'Test', complete: false})} removeTodo={removeTodo} toggleComplete={()=>{}} />);
    let button = app.find('li button.delete');
    button.simulate('click', {preventDefault: () =>{}});
    expect(deleted).toBeTruthy();
  });

  it('renders consistently', () => {
    const tree = renderer.create(<Item item={({id: 0, text: 'Test', complete: false})} delete={()=>{}} toggleComplete={()=>{}}/>).toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
