import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../../components/details';

describe('<Details />', () => {
  it('can render initially in section#details', () => {
    let app = shallow(<Details item={{text: 'Test', difficulty: 3, assignedTo: 'Me', date: 'Today'}} />);
    expect(app.find('section#details').exists()).toBe(true);
    expect(app.find('section#details p.text').exists()).toBe(true);
    expect(app.find('section#details p.difficulty').exists()).toBe(true);
    expect(app.find('section#details p.assigned-to').exists()).toBe(true);
    expect(app.find('section#details p.date').exists()).toBe(true);
    expect(app.find('section#details div header button').exists()).toBe(true);
  });

  it('will not render anything if item not passed in params', () => {
    let app = shallow(<Details />);
    expect(app.find('section#details').exists()).toBe(false);
  });

  it('can close modal by clicking close button', () => {
    // Arrange
    let clicked = false;
    function func() {
      clicked = true;
    }

    let app = mount(<Details item={{text: 'Test', difficulty: 3, assignedTo: 'Me', date: 'Today'}} closeDetails={func} />);
    let button = app.find('section#details div header button');
    
    button.simulate('click', {preventDefault: () => {}});

    //Assert
    expect(clicked).toBeTruthy();
  });

  it('renders consistently', () => {
    const tree = renderer.create(<Details item={{text: 'Test', difficulty: 3, assignedTo: 'Me', date: 'Today'}} />).toJSON();
    // console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
