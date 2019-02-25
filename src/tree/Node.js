
import React from 'react';
import { Wrapper, Text, Node, Arrow } from './styles'

const NodeContainer = (props) => {
  const { item, classes, render, onClick, direction, children } = props;
  return(
    <Node id={item.id} styles={classes.lines}>
      { direction && item.parent && <Arrow color={ classes.lines.color } /> }
    {
      typeof render === 'function' ? 
        React.cloneElement(
          render(item), 
          {
            onClick: () => console.log(item),
            styles: classes.node
          }
        )
        
      :
        <Wrapper styles={classes.node} onClick={() => onClick(item)}>
            <Text styles={classes.text}>{item.name}</Text>
        </Wrapper>
    }
      { children }
    </Node>

  )
}


export default NodeContainer;