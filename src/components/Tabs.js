import React from 'react'
import styled from 'styled-components'

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 2em;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #FF3B30;

`
const Tab = styled.div`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #FF3B30;
  &:hover {
    background: #FF3B30;
    color: #fff;
  }
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`

const Label = styled.label`
`

const Tabs = () => (
  <TabContainer>
    <Tab>
      <Label>
        My Library
      </Label>
    </Tab>
    <Tab>
      <Label>
        My Collection
      </Label>
    </Tab>
    <Tab>
      <Label>
        My Store
      </Label>
    </Tab>
  </TabContainer>
)

export default Tabs
