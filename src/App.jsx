import React from 'react';
import Tree from './lib/components/tree/Tree';
import { data1 } from './lib/treeMockData';

const App = () => (
  // can be used like this: withStyles(styles)(Tree)
  <Tree
    data={data1}
    render={item => <div id={item.id}>{`${item.id}.${item.name}`}</div>}
    onClick={item => console.log(item)}
    direction
  />
);


export default App;
