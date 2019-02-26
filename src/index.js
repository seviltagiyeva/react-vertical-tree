import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import Tree from './lib';
import { data1 } from './treeMockData';


WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif'],
  },
});


// can be used like this: withStyles(styles)(Tree)
const App = () => (
  <Tree
    data={data1}
    render={item => <div id={item.id}>{`${item.id}.${item.name}`}</div>}
    onClick={item => console.log(item)}
    direction
  />
);


ReactDOM.render(<App />, document.getElementById('index'));
