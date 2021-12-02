import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 40px;
  background-color: #FFB21C ;
  color: #f2f2f2;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`