import React from 'react';
import Tree from './lib';
import { data1 } from './lib/treeMockData';

// can be used like this: withStyles(styles)(Tree)
const App = () => (
  <Tree
    data={data1}
    render={item => <div id={item.id}>{`${item.id}.${item.name}`}</div>}
    onClick={item => console.log(item)}
    direction
  />
);


export default App;
