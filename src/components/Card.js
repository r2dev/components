import React from 'react'
import styled, {keyframes} from 'styled-components'

const animateExpend = keyframes`
  0% {
    height: 6em;
  }
  100% {
    height: 12em;
  }
`
const animateShrink = keyframes`
  0% {
    height: 12em;
  }
  100% {
    height: 6em;
  }
`
const animateAppear = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0

  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const CardContainer = styled.div`
  padding-top: 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin:0 auto;
  animation: ${animateAppear} .5s ease-in-out;

`

const CardHeader = styled.div`
  height: 2em;
  background: rgba(255, 255, 255, .87);
  border-radius: 15px 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const CardTitle = styled.label`
  font-size: 1em;
  font-weight: 300;
  padding-left: .375em;
`

const CardToggle = styled.div`
  font-size: .875em;
  font-weight: 300;
  padding-right: .675em;
`
const CardBody = styled.div`
  height: ${props => props.expended? '12em': '6em'};
  border-radius: 0 0 15px 15px;
  background: rgba(255,255,255, .65);
  animation:${props => props.expended? (animateExpend+ '.3s linear'): (animateShrink + '.3s linear')};
`

const Card = ({title, LessContent, MoreContent, expended=false, handleToggle}) => (
  <CardContainer>
    <CardHeader>
      <CardTitle>
        {title}
      </CardTitle>
      <CardToggle onClick={handleToggle}>
        {(expended? 'show less': 'show more')}
      </CardToggle>
    </CardHeader>
    <CardBody
      expended={expended}
    >
    {LessContent}
    {(expended)? MoreContent: null}
    </CardBody>
  </CardContainer>
)

export default Card
