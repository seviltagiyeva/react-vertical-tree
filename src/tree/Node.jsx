
import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, Text, Node, Arrow, Round,
} from './styles';

const NodeContainer = (props) => {
  const {
    item, classes, render, onClick, direction, children,
  } = props;
  return (
    <Node id={item.id} styles={classes.lines}>
      { item.parent && <Round color={classes.lines.color} /> }
      { direction && item.parent && <Arrow color={classes.lines.color} /> }
      {
      typeof render === 'function'
        ? React.cloneElement(
          render(item),
          {
            onClick: () => onClick(item),
            styles: classes.node,
          },
        )

        : (
          <Wrapper styles={classes.node} onClick={() => onClick(item)}>
            <Text styles={classes.text}>{item.name}</Text>
          </Wrapper>
        )
    }
      { children }
    </Node>

  );
};

NodeContainer.propTypes = {
  item: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.objectOf(PropTypes.object),
  render: PropTypes.func,
  onClick: PropTypes.func,
  direction: PropTypes.bool,
  children: PropTypes.node,
};

NodeContainer.defaultProps = {
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
  children: null,
};

export default NodeContainer;
