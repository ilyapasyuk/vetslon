import styled, { keyframes } from 'styled-components'

interface StyledPageIntroProps {
  backgroundImage: string
  size?: 'default' | 'large'
}

const StyledPageIntro = styled.section<StyledPageIntroProps>`
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  padding: ${({ size }) => (size === 'default' ? '115px' : '200px')} 0;
  background-position: center;
  background-size: cover;
  position: relative;
`

const shake = keyframes`
  0% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }`

const StyledPageIntroTitle = styled.h1`
  display: inline-flex;
  font-size: 36px;
  color: #fff;
  margin-bottom: 18px;
  line-height: 1.1;
  clip-path: polygon(0 0, 100% 0, 91% 100%, 0% 100%);
  padding: 13px 40px 13px 20px;
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 15px 15px 40px 15px;
  font-family: 'Nunito', sans-serif;
`

const StyledPageIntroShape1 = styled.img`
  left: 44%;
  top: 16%;
  position: absolute;
  z-index: 1;
  animation: 1.5s ${shake} infinite;
`

const StyledPageIntroShape2 = styled.img`
  position: absolute;
  z-index: 1;
  animation: 1.5s ${shake} infinite;
  left: 32%;
  top: 66%;
`

export { StyledPageIntro, StyledPageIntroTitle, StyledPageIntroShape1, StyledPageIntroShape2 }
