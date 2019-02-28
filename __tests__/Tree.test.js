import React from 'react';
import { shallow } from '../enzyme';
import { Root } from '../src/styles';
import Tree from '../src/components/tree/Tree';
import NodeContainer from '../src/components/node/Node';
import { data1, data2, data3 } from '../treeMockData';

describe('Tree tests', () => {
  it('renders Tree with Root components', () => {
    const wrapper = shallow(<Tree data={data1} />);
    expect(wrapper.find(Root)).toHaveLength(4);
  });

  it('renders Tree with Root components', () => {
    const wrapper = shallow(<Tree data={data2} />);
    expect(wrapper.find(Root)).toHaveLength(1);
  });

  it('renders Tree with Root components', () => {
    const wrapper = shallow(<Tree data={data3} />);
    expect(wrapper.find(Root)).toHaveLength(2);
  });

  it('renders Tree with NodeContainer components', () => {
    const wrapper = shallow(<Tree data={data3} />);
    expect(wrapper.find(NodeContainer)).toHaveLength(2);
  });

  it('renders Tree with NodeContainer components', () => {
    const wrapper = shallow(<Tree data={data2} />);
    expect(wrapper.find(NodeContainer)).toHaveLength(1);
  });
});
