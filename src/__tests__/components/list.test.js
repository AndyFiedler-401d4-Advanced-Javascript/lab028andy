import React from 'react';
import renderer from 'react-test-renderer';
import List from '../../components/list';

describe('<List />', () => {
  it('can render initially in ul', () => {
    let app = shallow(<List items={[]}/>);
    expect(app.find('ul').exists()).toBe(true);
    expect(app.find('ul li').exists()).toBe(false);
  });

  it('can add todos by passing props', () => {

    let app = mount(<List items={[{id: 0, text: 'test', completed: true }]} />);
    expect(app.find('ul li').exists()).toBe(true);
  });

  it('renders consistently', () => {
    const tree = renderer.create(<List items={[]} />).toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
