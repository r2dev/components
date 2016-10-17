import React, { PropTypes } from 'react'
import styled from 'styled-components'

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 2em;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.main};
  box-sizing: border-box;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
`
const Tab = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.selected ? '#fff': props.theme.main};
  background: ${props => props.selected? props.theme.main: 'initial'};
  border-right: 1px solid ${props => props.selected? '0': props.theme.main};
  -webkit-background-clip: padding-box;
  &:first-child {
    border-radius: 3px 0 0 3px;
    border-left: 0;
  }
  &:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 0;
  }
`
const SegmentedControlIOS = ({values, selectedIndex=0}) => (
  <TabContainer>
    {
      values.map((value, index) => (
        <Tab
          key={index}
          selected={selectedIndex === index}
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
  tintColor: PropTypes.string,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
}

export default SegmentedControlIOS
