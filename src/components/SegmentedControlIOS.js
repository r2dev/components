import React, { PropTypes } from 'react'
import styled, { keyframes } from 'styled-components'

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 2.3em;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main};
  box-sizing: border-box;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
`
const animateBg = keyframes`
  from {
    background: initial;
    color: ${props => props.theme.main};
  }
  to {
    background: ${props => props.theme.main};
    color: '#fff';
  }
`

const Tab = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: .875rem;
  color: ${props => props.selected ? '#fff': props.theme.main};
  background: ${props => props.selected? props.theme.main: 'initial'};
  border-right: ${props => props.selected? '0': '1px solid ' + props.theme.main};
  animation: ${props => props.selected? animateBg: ''} .3s linear;
  -webkit-tab-highligh-color: rgba(0,0,0,0);
  -webkit-user-select: none;
  &:first-child {
    border-radius: 3px 0 0 3px;
    border-left: 0;
  }
  &:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 0;
  }
`

const SegmentedControlIOS = ({values, selectedIndex=0, onValueChange}) => (
  <TabContainer>
    {
      values.map((value, index) => (
        <Tab
          key={index}
          selected={selectedIndex === index}
          onClick={() => onValueChange(value)}
        >
          {value}
        </Tab>
      ))
    }
  </TabContainer>
)

SegmentedControlIOS.propTypes = {
  enabled: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
}

export default SegmentedControlIOS
