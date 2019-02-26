import React from 'react';
import { shallow } from '../enzyme';
import {
  Round, Arrow, Wrapper, Text,
} from '../lib/components/styles';
import NodeContainer from '../lib/components/node/Node';
import { data1, data2 } from '../treeMockData';

describe('Node tests', () => {
  it('renders node container with Arrow & Round', () => {
    const wrapper = shallow(<NodeContainer
      item={data1[0].children[2]}
      direction
      round
    />);
    expect(wrapper.find(Round)).toHaveLength(1);
    expect(wrapper.find(Arrow)).toHaveLength(1);
  });

  it('renders node container without Arrow', () => {
    const wrapper = shallow(<NodeContainer
      item={data2[0]}
      direction
    />);
    expect(wrapper.find(Arrow)).toHaveLength(0);
  });

  it('renders node container with default content', () => {
    const wrapper = shallow(<NodeContainer
      item={data2[0]}
      direction
    />);
    expect(wrapper.find(Wrapper)).toHaveLength(1);
    expect(wrapper.find(Text)).toHaveLength(1);
  });
});
