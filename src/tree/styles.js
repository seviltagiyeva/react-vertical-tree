import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  border: 1px solid gray;
  z-index: 135;
  margin-top: 2px;
  &:hover{ 
    cursor: pointer;
  }
  ${props => props.styles ? { ...props.styles} : ""};
`

export const Node = styled.li`
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: ${props => props.styles? props.styles.height: '40px'} 5px 0 5px ;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    right:  calc( 50% - ${props => parseInt(props.styles.width || 2)/2 + 'px' } );
    border-top: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#ccc' } ;
    width: 50%;
    height: ${props => props.styles? props.styles.height: '40px'};
    z-index: -1;
  }
  ::after{
    left: calc( 50% - ${props => parseInt(props.styles.width || 2)/2 + 'px'});
    border-left: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#ccc' };
    content: '';
    position: absolute;
    top: 0;
    //right: calc( 50% - ${props => parseInt(props.styles.width || 2)/2 + 'px'});
    border-top: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#ccc' };
    width: 50%;
    height: ${props => props.styles? props.styles.height: '40px'};
    z-index: -1;
  }
  &:first-child::before{
    border: 0 none;
  }
  &:last-child::after{
  border : none 
  }
&:last-child::before{
  border-right: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#ccc' };
}
&:only-child{
  padding-top : 0px;
  margin: auto auto 
}
&:only-child::before {
  border-right : none ;
  left : 0px;
  right : 0px ;
}
`

export const Arrow = styled.span`
  border: solid  ${props => props.color? props.color: '#ccc' } ;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  left: calc( 50% - 4px );
  margin-top: -7px;
  position: absolute;

  transform: rotate(45deg);
`

export const Text = styled.span`
  ${props => props.styles ? { ...props.styles} : ""};
`