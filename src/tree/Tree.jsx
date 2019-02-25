
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NodeContainer from './Node';

const Root = styled.ul`
  &:not(:first-child){
    display: flex;
    position: relative ;
    padding-top :${props => props.styles.height};
    margin: 0;
  }
  &:empty::before {
    border-left : none !important;
  }
  &:not(:first-child)::before{
    content: '';
    position: absolute;
    top: 0
    left: calc( 50% - ${props => `${parseInt(props.styles.width || 2, 0) / 2}px`});
    border-left: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#d6e2ea'};
    width: 0;
    height: ${props => props.styles.height || '40px'};
  }
`;

class Tree extends React.Component {
  render() {
    const { data } = this.props;

    const renderTree = (tree) => {
      const {
        classes, render, onClick, direction,
      } = this.props;
      const { lines } = classes;
      return (
        <Root styles={lines}>
          {tree.map(branch => (
            <NodeContainer
              item={branch}
              key={branch.id}
              onClick={onClick}
              classes={{ ...classes }}
              render={render}
              direction={direction}
            >
              {branch.children.length > 0 && renderTree(branch.children)}
            </NodeContainer>
          ))}
        </Root>
      );
    };

    return renderTree(data);
  }
}

Tree.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  render: PropTypes.func,
  onClick: PropTypes.func,
  direction: PropTypes.bool,
};

Tree.defaultProps = {
  classes: {
    lines: {
      height: '60px',
      width: '2px',
    },
    node: {},
    text: {},
    arrow: {},
  },
  render: null,
  onClick: null,
  direction: false,
};

export default Tree;
