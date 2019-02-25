import React from 'react';


const  withStyles = styles => Component => class extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return <Component { ...this.props } classes={styles}/> 
  }
}

export default withStyles;
