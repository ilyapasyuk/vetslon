import styled from 'styled-components'

interface StyledPageIntroProps {
  backgroundImage: string
}

const StyledPageIntro = styled.section<StyledPageIntroProps>`
  background-image: url('${({ backgroundImage }) => backgroundImage}');
  padding: 115px 0;
  background-position: center;
  background-size: cover;
  margin-bottom: 110px;
`

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

export { StyledPageIntro, StyledPageIntroTitle }
