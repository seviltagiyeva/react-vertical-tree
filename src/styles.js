import styled from 'styled-components';
import { calcWidth } from './utils';

export const Wrapper = styled.div`
  display: inline-block;
  z-index: 135;
  margin-top: 2px;
  padding: 10px 20px;
  color: white;
  border-radius: 8px;
  background-color: #1890ff;
  box-shadow: 0 2px 0 rgba(0,0,0,0.045);
  &:hover{ 
    cursor: pointer;
  }
  ${props => (props.styles ? { ...props.styles } : '')};
`;

export const Round = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border: 2px solid  ${props => props.color || '#d6e2ea'};
  background-color: #fff;
  left: calc( 50% - 5px );
  top: -3px;
  border-radius: 3px;
`;
export const Node = styled.li`
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: ${props => (props.styles ? props.styles.height : '40px')} 5px 0 5px ;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    right:  calc( 50% - ${props => calcWidth(props.styles.width)});
    border-top: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#d6e2ea'} ;
    width: 50%;
    height: ${props => (props.styles ? props.styles.height : '40px')};
    z-index: -1;
  }
  ::after{
    left: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-left: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#d6e2ea'};
    content: '';
    position: absolute;
    top: 0;
    //right: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-top: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#d6e2ea'};
    width: 50%;
    height: ${props => (props.styles ? props.styles.height : '40px')};
    z-index: -1;
  }
  &:first-child::before{
    border: 0 none;
  }
  &:last-child::after{
  border : none 
  }
&:last-child::before{
  border-right: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#d6e2ea'};
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
`;

export const Arrow = styled.span`
  border: solid  ${props => (props.color ? props.color : '#d6e2ea')} ;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  left: calc( 50% - 4px );
  margin-top: -7px;
  position: absolute;

  transform: rotate(45deg);
`;

export const Text = styled.span`
  font-family: 'Open Sans', sans-serif;
  color: '#fff';
  font-size: 15px;
  ${props => (props.styles ? { ...props.styles } : '')};
`;


export const Root = styled.ul`
  &:not(:first-child){
    display: flex;
    position: relative ;
    padding:${props => props.styles.height} 0 0 0;
    margin: 0;
  }
  &:empty::before {
    border-left : none !important;
  }
  &:not(:first-child)::before{
    content: '';
    position: absolute;
    top: 0;
    left: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-left: ${props => props.styles.width || '2px'} solid ${props => props.styles.color || '#d6e2ea'};
    width: 0;
    height: ${props => props.styles.height || '40px'};
  }
`;
