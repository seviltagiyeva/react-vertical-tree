import React from 'react';
import Tree from './tree/Tree';
import withStyles from './utils';
import { departments } from './treeMockData';

const styles = {
  node: {
    background: 'red',
    padding: '15px 20px',
    borderRadius: '20px',
  },
  text: {
    font: ' 15px arial, sans-serif',
    color: '#fff',
    fontWeight: 'bold',
  },
  lines: {
    color: 'blue',
    height: '80px',
    width: '2px',
  },
};

const App = () => {
  const TreeWithStyle = withStyles(styles)(Tree);
  return (
    <TreeWithStyle
      data={departments}
      render={item => <div id={item.id}>{`${item.id}.${item.name}`}</div>}
      onClick={item => console.log(item)}
      direction
    />
  );
};


export default App;
