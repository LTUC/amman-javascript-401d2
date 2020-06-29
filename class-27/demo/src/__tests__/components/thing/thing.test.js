import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Thing from '../../../components/thing';

describe('<Thing/>', () => {
  it('is alive at application start', () => {
    const thing = shallow(<Thing />);
    // expect(thing.find('#me').exists()).toBeTruthy();
    // expect(thing.find('p').exists()).toBeTruthy();
    expect(thing.find('section aside h2').exists()).toBeTruthy();
  });
  it('changes state on click', () => {
    const thing = mount(<Thing />);
    const button = thing.find('button');
    button.simulate('click');
    expect(thing.state.stuff).toBeFalsy();
  });

  it('Renders correctly', () => {
    const tree = renderer.create(<Thing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
