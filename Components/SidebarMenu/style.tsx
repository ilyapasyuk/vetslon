import styled from 'styled-components'

import { MEDIA_QUERY } from 'Constants/mediaQueries'

const StyledMenu = styled.ul`
  border: 1px solid #ebebeb;
  margin: 0;
  padding: 0;
  background: white;
`

const StyledMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  border: 0;
  position: relative;

  & + & {
    border-top: 1px solid #ebebeb;
  }
`

const StyledMenuLink = styled.a`
  color: #676666;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: block;
  padding: 10px 18px;
  flex: 1;

  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    padding: 14px 18px;
  }

  &:hover {
    color: #0a303a;
    background: #f5f2eb;
  }
`

const StyledMenuOnClickButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
`

export { StyledMenu, StyledMenuItem, StyledMenuLink, StyledMenuOnClickButton }
