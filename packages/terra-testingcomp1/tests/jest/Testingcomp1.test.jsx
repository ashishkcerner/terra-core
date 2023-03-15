import React from 'react';
import Testingcomp1 from '../../src/Testingcomp1';

describe('Testingcomp1', () => {
  const defaultRender = <Testingcomp1 />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.testingcomp1').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class testingcomp1', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('testingcomp1');
  });
});
