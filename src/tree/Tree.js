
import React from 'react';
import NodeContainer from './Node';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Root = styled.ul`
  &:not(:first-child){
    display: flex;
    position: relative ;
    padding-top :${props => props.styles.height };
    margin: 0;
  }
  &:empty::before {
    border-left : none !important;
  }
  &:not(:first-child)::before{
    content: '';
    position: absolute;
    top: 0
    left: calc( 50% - ${props =>  parseInt(props.styles.width || 2)/2 + 'px' });
    border-left: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#ccc'};
    width: 0;
    height: ${props => props.styles.height  || '40px'};
  }
`

class Tree extends React.Component{
  render() {

    const { data } = this.props;

    const renderTree = (tree) =>{
      const { classes , render, onClick, direction } = this.props;
      const { lines, node, text, arrow } = classes;
      return (<Root styles={lines}>
        {tree.map( (branch,i)=>(
          <NodeContainer 
            item={branch}
            key={i}
            onClick={onClick}
            classes={{...classes}}
            render={render}
            direction
          >
            {branch.children.length>0 && renderTree(branch.children)}
          </NodeContainer>
        ))}
      </Root>)
    }
   
    return renderTree(data)
  }
}

Tree.propTypes = {
 classes: PropTypes.object,
 data: PropTypes.arrayOf(PropTypes.object).isRequired,
 render: PropTypes.func,
 onClick: PropTypes.func,
 arrow: PropTypes.bool
};

Tree.defaultProps = {
  classes: {
    lines: {
      height: '20px',
      width: '2px'
    },
    node: {},
    text: {},
    arrow: {}
  },
  render: null,
  onClick: null,
  arrow: false
}

export default Tree;