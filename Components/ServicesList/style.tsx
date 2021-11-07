import styled from 'styled-components'

const StyledServicesListRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 30px 30px;
  align-items: center;
  grid-gap: 20px;
`

const StyledServicesListColumn = styled.div`
  display: grid;
  grid-gap: 20px;
`

export { StyledServicesListColumn, StyledServicesListRow }
