# React Vertical Graph Tree

[![Build Status](https://travis-ci.com/seviltagiyeva/react-tree.svg?branch=master)](https://travis-ci.com/seviltagiyeva/react-tree)


Simple and lightweight tree component for react apps.


## Installation
```bash
npm i react-vertical-tree
```

## Usage
Use showed below structure to set data to `<Tree/>` component:

```bash
import Tree from 'react-vertical-tree'

...
// data have to be below structure

const  data = [
  {id: 1, name: 'company', parent: null, children: [
    {id: 2, parent: {id: 1}, name: 'subcompany1', children: []},
    {id: 3, parent: {id: 1}, name: 'subcompany2', children: [
      {id: 4, parent: {id: 3}, name: 'example-company', children: []}
    ]},
    {id: 5, parent: {id: 1}, name: 'company2', children: []},
    {id: 6, parent: {id: 1}, name: 'company3', children: []}
  ]}
]

...
return <Tree data={data} />

...

```

![default preview](https://ibb.co/n37SphP)

Add direction property for line arrows:

```bash
import Tree from 'react-vertical-tree'
...
return <Tree
        data={data} 
        direction
      />
...

```

![default preview](https://ibb.co/WfgdnKt)

Also you can use `withStyles` function and change the default style. Available class names are `node, lines, text` .

```bash
import Tree, { withStyles } from 'react-vertical-tree'

...
 const styles = {
        lines: {
          color: '#1890ff',
          height: '90px',
        },
        node: {
          backgroundColor: '#fff',
          border: '1px solid #1890ff',
        },
        text: {
          color: '#ccc',
        }
      }
...

const StyledTree = withStyles(styles)(Tree)
return <StyledTree data={data} direction/>

...

```

![default preview](https://ibb.co/CMGFhX9)

Also you can fully customize node component with `render` method:

```bash
import Tree from 'react-vertical-tree'

...

return <Tree 
        data={data} 
        direction
        render={ item => <div>{`${item.id}.${item.name}`}</div>}
      />

...

```

![default preview](https://ibb.co/DGN1wX7)


Handle node actions with `onClick` method:

```bash
import Tree, { withStyles } from 'react-vertical-tree'

...

return <Tree 
        data={data} 
        direction
        onClikc={ item => console.log(item.id)}
      />

...

```
## Configuration

Properties | Type | Default | Description
--- | --- | --- | --- |
data | array | [] | tree content
direction | bool | false | directional arrow in lines
render | function | null | customize node content
onClick | function | null | event handler for node components 
