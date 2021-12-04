import styled from 'styled-components'

const StyledContactsFormVertical = styled.div`
  font-family: 'Roboto', sans-serif;
`

const StyledContactsField = styled.div`
  margin-bottom: 25px;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #0a303a;
    margin-bottom: 10px;
    opacity: 1;
    display: block;
  }

  input,
  textarea {
    width: 100%;
    background: #f5f2eb;
    border: none;
    font-size: 14px;
    padding: 15px 20px;
    border-radius: 5px;
    display: block;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`

export { StyledContactsField, StyledContactsFormVertical }
