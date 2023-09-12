import styled from "styled-components"

export const IdUl = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`
export const IdButton = styled.button<{ $isChecked: boolean }>`
  display: block;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ $isChecked, theme }) => ($isChecked ? theme.colors.blue : theme.colors.gray)};
  color: ${({ $isChecked, theme }) => $isChecked && theme.colors.blue};
  font-weight: ${({ $isChecked }) => $isChecked && "bold"};
`
