import React from 'react';


export const withStyles = styles => Component => class extends React.PureComponent {
  render() {
    return <Component {...this.props} classes={styles} />;
  }
};

export const calcWidth = width => `${parseInt(width || 2, 0) / 2}px`;
