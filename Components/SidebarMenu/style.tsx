import styled from 'styled-components'

import { MEDIA_QUERY } from 'Constants/mediaQueries'

const StyledMenu = styled.ul`
  border: 1px solid #ebebeb;
  margin: 0;
  padding: 0;
`

const StyledMenuItem = styled.li`
  list-style: none;
  margin: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 18px;

  @media (min-width: ${MEDIA_QUERY.SMALL_DEVICES}px) {
    padding: 14px 18px;
  }

  & + & {
    border-top: 1px solid #ebebeb;
  }
`

const StyledMenuLink = styled.a`
  color: #676666;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #0a303a;
    background: #f5f2eb;
  }
`

export { StyledMenu, StyledMenuItem, StyledMenuLink }
